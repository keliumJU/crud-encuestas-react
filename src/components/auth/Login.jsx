import React from 'react';
import '../.././App.css';
import { Form, Button} from 'react-bootstrap';
import axios from 'axios';

export default class Login extends React.Component {

	state = {
    	nombre: '',
		contrasenia: ''
	}

	handleChange = event => {
		this.setState({ nombre: event.target.value, contrasenia: event.target.value });
	}

	handleSubmit = event => {
    event.preventDefault();

	const user = {
		nombre: this.state.nombre,
		contrasenia: this.state.contrasenia
    };
	console.log(this.state.nombre)
	console.log(this.state.contrasenia)
	axios.post(`http://127.0.0.1:5000/api/login`, { user })
		.then(res => {
  	      console.log(res);
  	      console.log(res.data);
	})
	}	

	render(){
		return (
			<div>
				<Form method="POST" onSubmit={this.handleSubmit}>
					<Form.Group className="mb-3" controlId="formBasicInput">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" name="nombre" placeholder="Enter username" onChange={this.handleChange}/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" name="contrasenia" placeholder="Password" onChange={this.handleChange}/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		)
	}
}
