import React from 'react';
import '../.././App.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NavBar(){
    return (
	<>

		<Navbar className="navegacion" variant="dark">
		<Container>
		<Link to='/'>
			<Navbar.Brand href="/">Navbar</Navbar.Brand>
		</Link>
		<Nav className="me-auto">
		<Link to='/encuesta'>
			<Nav.Link href="#encuestas">Quiz</Nav.Link>
		</Link>
		<Link to='/register'>
			<Nav.Link href="#Register">Register</Nav.Link>
		</Link>
		<Link to='/login'>
			<Nav.Link href="#Login">Login</Nav.Link>
		</Link>
		<Link to='/logout'>
			<Nav.Link href="#Logout">Logout</Nav.Link>
		</Link>
		</Nav>
		</Container>
		</Navbar>
	</>
    )
}

export default NavBar;