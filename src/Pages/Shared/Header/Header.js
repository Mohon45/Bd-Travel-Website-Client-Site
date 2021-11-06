import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    // console.log(user);
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="nav-logo" href="#home"> <img src="https://i.ibb.co/8DJ6TL3/logo.png" alt="" />
                     BD TRAVEL</Navbar.Brand>
                     <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                            <NavLink className="nav-link" to="/service">Service</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            
                            {
                                user.email ? 
                                <div className="d-flex">
                                    <NavLink className="nav-link" to="/addServices">Add Service</NavLink>
                                    <NavLink className="nav-link" to="/myOrders">My Orders</NavLink>
                                    <Button onClick={logOut}>Log Out</Button>

                                </div>
                                :
                                
                                <NavLink className="nav-link"  to="/login">Login</NavLink>
                                
                            }
                            <Navbar.Text className="ms-3">
                                 <a className="user-name" href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;