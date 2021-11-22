import React, { Component } from 'react';
import '../.././App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Card, Row, Col, Container, CardGroup } from 'react-bootstrap';
import API from '../../api/api'
import jwt from 'jwt-decode'

import { Link } from 'react-router-dom';
const url = "http://127.0.0.1:5000/encuestas";

class Encuesta extends Component {
	state = {
		data: [],
		modalInsertar: false,
		modalEliminar: false,
		form: {
			id: '',
			nombre: '',
			descripcion: '',
			img: '',
			user_id: '',
			tipoModal: ''
		},
		file: null,
	}
	handleInputChange = async event => {
		await this.setState({
			file: event.target.files[0],
		});
	}


	peticionGet = () => {
		const loggedInUser = localStorage.getItem("user");
		const user = jwt(loggedInUser)
		if (loggedInUser) {
			this.state.form.user_id = user.sub
		}

		API.get(`encuestas_usuario?id=${this.state.form.user_id}`).then(response => {
			this.setState({ data: response.data });
		}).catch(error => {
			console.log(error.message);
		})
	}

	peticionPost = async () => {
		const loggedInUser = localStorage.getItem("user");
		const user=jwt(loggedInUser)
		if (loggedInUser) {
			this.state.form.user_id = user.sub 
		}

		const data = new FormData()
		data.append('img', this.state.file)
		data.append('user_id', this.state.form.user_id)
		data.append('descripcion', this.state.form.descripcion)
		data.append('nombre', this.state.form.nombre)

		console.warn(data);


		delete this.state.form.id;

		await API.post('encuesta', data).then(response => {
			this.modalInsertar();
			this.peticionGet();
		}).catch(error => {
			console.log(error.message);
		})
	}

	peticionPut = () => {
		const data = new FormData()

		data.append('img', this.state.file)
		data.append('id', this.state.form.id)
		data.append('descripcion', this.state.form.descripcion)
		data.append('nombre', this.state.form.nombre)

		API.put('encuesta', data).then(response => {
			this.modalInsertar();
			this.peticionGet();
		})
	}

	peticionDelete = () => {
		API.delete('encuesta?id=' + this.state.form.id).then(response => {
			this.setState({ modalEliminar: false });
			this.peticionGet();
		})
	}

	modalInsertar = () => {
		this.setState({ modalInsertar: !this.state.modalInsertar });
	}

	seleccionarencuesta = (encuesta) => {
		this.setState({
			tipoModal: 'actualizar',
			form: {
				id: encuesta.id,
				nombre: encuesta.nombre,
				descripcion: encuesta.descripcion,
				img: encuesta.img
			}
		})
	}

	handleChange = async e => {
		e.persist();
		await this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value
			}
		});
		console.log(this.state.form);
	}

	componentDidMount() {
		const loggedInUser = localStorage.getItem("user");
		const user = jwt(loggedInUser);
		console.log(user.sub)
		if (loggedInUser) {
			this.state.form.user_id = parseInt(user.sub)
			console.log("this is the user id: ")
			console.log(this.state.form.user_id)
		}

		this.peticionGet();
	}


	render() {
		const { form } = this.state;
		return (
			<div className="App">
				<br /><br /><br />
				<button className="btn btn-success" onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }}>Agregar encuesta</button>
				<br /><br />
				<Container >
				<Row >
					<div className="card-columns">
					{this.state.data.map(encuesta => {
						return (
							<Col>
								<Card className="card-block" >
									<img className="card-img-top img-fluid" src={encuesta.img} alt={encuesta.nombre}/>
									<Card.Body>
										<Card.Title>{encuesta.nombre}</Card.Title>
										<Card.Text>
											{encuesta.descripcion}
										</Card.Text>
									</Card.Body>
									<Card.Body>
										<Link to={`/encuesta/seccion/${encuesta.id}`}>
											<button className="btn btn-info"><FontAwesomeIcon icon={faPuzzlePiece} /></button>
										</Link>
										{"   "}
										<button className="btn btn-primary" onClick={() => { this.seleccionarencuesta(encuesta); this.modalInsertar() }}><FontAwesomeIcon icon={faEdit} /></button>
										{"   "}
										<button className="btn btn-danger" onClick={() => { this.seleccionarencuesta(encuesta); this.setState({ modalEliminar: true }) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
									</Card.Body>
								</Card>
							</Col>
						)
					})
					}
					</div>
				</Row>
				</Container>
				<Modal isOpen={this.state.modalInsertar}>
					<ModalHeader style={{ display: 'block' }}>
						<span style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
					</ModalHeader>
					<ModalBody>
						<div className="form-group">
							<label htmlFor="id">ID</label>
							<input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form ? form.id : this.state.data.length + 1} />
							<br />
							<label htmlFor="nombre">Name</label>
							<input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form ? form.nombre : ''} />
							<br />
							<label htmlFor="descripcion">Description</label>
							<input className="form-control" type="text" name="descripcion" id="descripcion" onChange={this.handleChange} value={form ? form.descripcion : ''} />
							<br />
							<label htmlFor="img">Img</label>
							<input className="form-control" type="file" name="img" id="img" onChange={this.handleInputChange} />
						</div>
					</ModalBody>

					<ModalFooter>
						{this.state.tipoModal == 'insertar' ?
							<button className="btn btn-success" onClick={() => this.peticionPost()}>
								Insertar
							</button> : <button className="btn btn-primary" onClick={() => this.peticionPut()}>
								Actualizar
							</button>
						}
						<button className="btn btn-danger" onClick={() => this.modalInsertar()}>Cancelar</button>
					</ModalFooter>
				</Modal>


				<Modal isOpen={this.state.modalEliminar}>
					<ModalBody>
						Estás seguro que deseas eliminar a la encuesta {form && form.nombre}
					</ModalBody>
					<ModalFooter>
						<button className="btn btn-danger" onClick={() => this.peticionDelete()}>Sí</button>
						<button className="btn btn-secundary" onClick={() => this.setState({ modalEliminar: false })}>No</button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
export default Encuesta;