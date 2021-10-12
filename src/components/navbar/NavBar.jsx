import React from 'react';
import '../.././App.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NavBar(){
    return (
	<>

		<Navbar className="navegacion">
		<Container>
		
		<Link to='/'>
			<img src='./logo777.png' width='50px'/>
			<Navbar.Brand href="/">EnQestas</Navbar.Brand>
		</Link>

		<Nav className="mx-auto">

		<Link className="nav-encuesta" to='/encuesta'>
			<Nav.Link className="link-nav" to="/">Quiz</Nav.Link>
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