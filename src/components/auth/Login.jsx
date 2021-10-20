import React from 'react';
import '../.././App.css';
import { Form, Button } from 'react-bootstrap';
import API from '../../api/api'

export default class Login extends React.Component {

	state = {
		nombre: '',
		contrasenia: '',
		errors: { 'usermsg': '' },
	}


	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = async event => {
		event.preventDefault();

		const user = {
			nombre: this.state.nombre,
			contrasenia: this.state.contrasenia
		};
		console.log(this.state.nombre)
		console.log(this.state.contrasenia)
		let msg=""
		await API.post(`api/login`, { user })
			.then(res => {
				msg=""
				console.log(res);
				console.log(res.data);
				localStorage.setItem("user", JSON.stringify(res.data));
				this.setState({
				errors: { 'usermsg': msg }
			});
			this.props.history.push("/encuesta");
			}).catch(function (error) {
				if (error.response) {
					console.log("here in cath erormsg")
					// Request made and server responded
					//this.state.errorServe=true
					msg=error.response.data
					console.log(error.response.data);
					//console.log(error.response.status);
					//console.log(error.response.headers);
				} else if (error.request) {
					// The request was made but no response was received
					console.log(error.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log('Error', error.message);
				}

			});
		if(msg!==""){
			this.setState({
				errors: { 'usermsg': msg }
			});
		}
	}

	render() {
		return (
			<div className="grid-login">
				<div className="container-grid-login border m-4 position-relative">
					<div className="container-formulario-login position-absolute top-50 start-50 translate-middle">
						<Form method="POST" onSubmit={this.handleSubmit}>
							<div className="error-msg">{this.state.errors.usermsg}</div>
							<Form.Group className="mb-3" controlId="formBasicInput">
								<Form.Label>Username</Form.Label>
								<Form.Control type="text" name="nombre" placeholder="Enter username" onChange={this.handleChange} />
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" name="contrasenia" placeholder="Password" onChange={this.handleChange} />
							</Form.Group>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</div>
				</div>
			</div>
		)
	}
}
