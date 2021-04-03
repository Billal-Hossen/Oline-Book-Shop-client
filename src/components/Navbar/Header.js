import React, { useContext } from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const Header = () => {
  
    return (
      
        <Navbar className="container mb-5" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="ml-5" href="#home">BOOK SHOP</Navbar.Brand>
 
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          {/* <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
  
          </Nav> */}
          <Nav >
             
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/addBooks">Add Book</Nav.Link>
            <Nav.Link as={Link} to="/order">Order</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link href="#features">Deals</Nav.Link>
            <Nav.Link href="#features"><img 
            src="../../icons/face.png" width="30"
            height="30"
            className="d-inline-block align-top"
           alt=""/></Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Header;