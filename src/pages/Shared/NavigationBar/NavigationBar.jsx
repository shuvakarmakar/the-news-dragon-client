// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () =>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                                <Link to={"/category/0"}>Home</Link>
                                <Link to={"/"}>About</Link>
                                <Link to={"/"}>Career</Link>
                        </Nav>
                        <Nav>
                            {user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>}

                                {user ? <Button onClick={handleLogout} variant="dark">Logout</Button> :
                                    <Link to={'/login'}><Button variant="dark">Login</Button></Link>
                                }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;