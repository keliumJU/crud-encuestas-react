import React from 'react';
import '../.././App.css';
import { Navbar, Nav, Container} from 'react-bootstrap';


function NavBar(){
    return (
	<>
		<Navbar bg="dark" variant="dark">
		<Container>
		<Navbar.Brand href="#home">Navbar</Navbar.Brand>
		<Nav className="me-auto">
		<Nav.Link href="#home">Home</Nav.Link>
		<Nav.Link href="#features">Quiz</Nav.Link>
		<Nav.Link href="#pricing">Register</Nav.Link>
		<Nav.Link href="#pricing">Login</Nav.Link>
		<Nav.Link href="#pricing">LogOut</Nav.Link>
		</Nav>
		</Container>
		</Navbar>
	</>
    )
}

export default NavBar;