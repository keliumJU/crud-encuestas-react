import React from 'react';
import '../.././App.css';
import { Form, Button} from 'react-bootstrap';

function Register() {
	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicInput">
					<Form.Label>Username</Form.Label>
					<Form.Control type="text" placeholder="Enter username" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	)
}

export default Register;