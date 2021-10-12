import React from 'react';
import '../.././App.css';
import { Navbar, Nav, Container} from 'react-bootstrap';

function Footer(){
    return (
	<>
		<footer className="footer">
			<Navbar>
			<Container>
			<Navbar.Brand href="#home">Footer</Navbar.Brand>
			<Nav className="me-auto">
			<Nav.Link href="#home">Development with ❤️ by Norn</Nav.Link>
			</Nav>
			</Container>
			</Navbar>
		</footer>
	</>
    )
}

export default Footer;