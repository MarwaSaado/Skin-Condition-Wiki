import React from 'react'
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { NavLink, Link } from 'react-router-dom';
/**
 * @author
 * @function Header
 **/

const Header = () => {
    console.log(localStorage.getItem("logged"));
    return (
        < Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
                <Link to="/" className="navbar-brand">Admin DashBoard</Link>
                {/* <Navbar.Brand href="#home" > Admin DashBoard </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" />
                <Nav className="mr-auto" > {} </Nav>
                <Nav >
                    {/*<Nav.Link href="#deets" > Signin </Nav.Link>*/}
                    {localStorage.getItem("logged") == 1
                        ? (
                            <NavDropdown title="OPTIONS" id="collasible-nav-dropdown">
                                <NavDropdown.Item >
                                    <NavLink to='/CreateSkinCondition'>Create Skin Condition</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <NavLink to='/ModifySkinCondition' >Modify Skin Condition</NavLink>
                                </NavDropdown.Item >
                                <NavDropdown.Item >
                                    <NavLink to='/deleteSkinCondition' >Delete Skin Condition</NavLink>
                                </NavDropdown.Item >
                                <NavDropdown.Item >
                                    <NavLink to='/listAllSkinCondition' >List All Skin Condition</NavLink>
                                </NavDropdown.Item >
                                <NavDropdown.Item >
                                    <NavLink to='/listCreatedSkinCondition' >List All Created Skin Condition</NavLink>
                                </NavDropdown.Item >
                                <NavDropdown.Item >
                                    <NavLink to='/login' >LogOut</NavLink>
                                </NavDropdown.Item >
                            </NavDropdown>
                        )
                        :
                        (<NavLink to='/login' className="nav-link">Sign In</NavLink>)
                    }
                    <span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </Nav >
            </Container>
        </Navbar >
    )

}

export default Header;