import React, { Component } from 'react';
import '../.././App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import API from '../../api/api'

import { Link } from 'react-router-dom';


class Opcion extends Component {
	state = {
		data: [],
		modalInsertar: false,
		modalEliminar: false,
		form: {
			id: '',
			descripcion: '',
			id_pregunta: '' 
		},
	}

	peticionGet = () => {

		this.state.form.id_pregunta=this.props.match.params.id	
		API.get(`opciones_pregunta?id=${this.state.form.id_pregunta}`).then(response => {
			this.setState({ data: response.data });
		}).catch(error => {
			console.log(error.message);
		})
	}


	peticionPost = async () => {
		let id_pregunta = this.props.match.params.id;
		const data = new FormData()

		data.append('descripcion', this.state.form.descripcion)
		data.append('id_pregunta', id_pregunta)

		await API.post('opcion', data).then(response => {
			this.modalInsertar();
			this.peticionGet();
		}).catch(error => {
			console.log(error.message);
		})
	}

	peticionPut = () => {
		const data = new FormData()

		data.append('id', this.state.form.id)
		data.append('descripcion', this.state.form.descripcion)

		API.put('opcion', data).then(response => {
			this.modalInsertar();
			this.peticionGet();
		})
	}

	peticionDelete = () => {
		API.delete('opcion?id=' + this.state.form.id).then(response => {
			this.setState({ modalEliminar: false });
			this.peticionGet();
		})
	}

	modalInsertar = () => {
		this.setState({ modalInsertar: !this.state.modalInsertar });
	}

	seleccionarOpcion = (Opcion) => {
		this.setState({
			tipoModal: 'actualizar',
			form: {
				id: Opcion.id,
				descripcion: Opcion.descripcion,
				id_pregunta: this.props.match.params.id,
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
		this.state.form.id_pregunta=this.props.match.params.id	
		console.log(this.state.form.id_pregunta);
		this.peticionGet();

	}


	render() {
		const { form } = this.state;
		return (
			<div className="App">
				<br /><br /><br />
				<button className="btn btn-success" onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }}>Agregar Opcion</button>
				<br /><br />
				<table className="table ">
					<thead>
						<tr>
							<th>ID</th>
							<th>descripcion</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{this.state.data.map(Opcion => {
							return (
								<tr>
									<td>{Opcion.id}</td>
									<td>{Opcion.descripcion}</td>
									<td>
										<button className="btn btn-primary" onClick={() => { this.seleccionarOpcion(Opcion); this.modalInsertar() }}><FontAwesomeIcon icon={faEdit} /></button>
										{"   "}
										<button className="btn btn-danger" onClick={() => { this.seleccionarOpcion(Opcion); this.setState({ modalEliminar: true }) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>



				<Modal isOpen={this.state.modalInsertar}>
					<ModalHeader style={{ display: 'block' }}>
						<span style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
					</ModalHeader>
					<ModalBody>
						<div className="form-group">
							<label htmlFor="id">ID</label>
							<input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form ? form.id : this.state.data.length + 1} />
							<br />
							<label htmlFor="descripcion">Description</label>
							<input className="form-control" type="text" name="descripcion" id="descripcion" onChange={this.handleChange} value={form ? form.descripcion : ''} />
							<br />
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
						Estás seguro que deseas eliminar a la Opcion {form && form.descripcion}
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
export default Opcion;