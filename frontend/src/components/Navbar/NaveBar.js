import React, { useEffect, useState } from 'react'
import '../../main.css'
import { Container, Navbar, Nav, Button, NavDropdown, Form } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa';
import './NavBar.css'
import axios from 'axios'

function NavBar() {

    let [logo, setLogo] = useState({})


    useEffect(() => {
        let logodetails = async () => {
            let { data } = await axios.get("http://localhost:8000/logo")
            setLogo(data)
        }
        logodetails()
    }, [])


    return (
        <div className='main_menu'>
            <Navbar collapseOnSelect expand="lg" className='navbarmain'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo.img} alt={logo.name} width={80} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <NavDropdown title="Services" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Serv 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Serv 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Serv 3</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#pricing">Portfolio</Nav.Link>
                            <NavDropdown title="Blog" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#pricing">Contact Us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <Button className='register_btn'>Sign Up</Button>
                            </Nav.Link>
                            <Nav.Link>
                                <div className="nav_icon">
                                    <FaBars />
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar