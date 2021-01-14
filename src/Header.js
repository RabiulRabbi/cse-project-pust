import { Button } from '@material-ui/core';
import { Link } from "react-router-dom"
import React from 'react';
import './Header.css';
import { Nav, Navbar } from 'react-bootstrap';
import logo1 from './logo/pust.png';
import logo2 from './logo/cse1.png';
import { useStateValue } from './StateProvider';
import { auth } from './firebaseConfig';

const Header = () => {
    const [{ user }, dispatch] = useStateValue();

    const handleSignOut = () => {

        auth.signOut().then(() => {
            alert('Signout successfull');
        }).catch((error) => {
            alert(error.message);
        });
    }

    return (
        <div className="header-section">
            <div className="header-container">
            <Navbar sticky="top" collapseOnSelect expand="lg" style={{ backgroundColor: 'white' }} variant="dark">
                <Navbar.Brand href="/home"><Link to="/home"><img height="55" src={logo1} alt="PUST"></img></Link></Navbar.Brand>
                <Navbar.Brand href="/home"><Link to="/home"><img className="cse-logo" height="55" width="200" src={logo2} alt="CSE"></img></Link></Navbar.Brand>
                {
                    user ? <Nav className="ml-auto align-items-center">
                        <Nav.Link onClick={handleSignOut} className="mr-3 bg-dark text-white login">Logout</Nav.Link>
                    </Nav> : <Nav className="ml-auto align-items-center">
                            <Nav.Link className="mr-3 bg-dark text-white login" href="/login">Log In/Register</Nav.Link>
                        </Nav>
                }
            </Navbar>
            <Navbar sticky="top" collapseOnSelect expand="lg" style={{ backgroundColor: 'darkblue' }} variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto align-items-center">
                        <Nav.Link className="mr-3 text-white"><Link className="text-white header-text" to="/">Home</Link></Nav.Link>
                        <div className="dropdown">
                            <Nav.Link className="mr-3 text-white" href="#about">About</Nav.Link>
                            <div id="dropdown-content">
                                <div id="contents">All the contents are given bellow:
                                    <Link to="/welcome">Welcome to CSE (PUST)</Link>
                                    <Link to="/history">History of CSE (PUST)</Link>
                                    <Link to="/why">Why CSE in PUST</Link>
                                    <Link to="/vision">Vision of CSE (PUST)</Link>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown">
                            <Nav.Link className="mr-3 text-white" href="#academic">Academic</Nav.Link>
                            <div id="dropdown-content">
                                <div id="contents">All the contents are given bellow:
                                <Link to="/programs">Programs</Link>
                                    <Link to="/admission">Admission</Link>
                                    <Link to="/curriculum">Curriculum</Link>
                                    <Link to="/ese">Academic Calendar</Link>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <Nav.Link className="mr-3 text-white" href="#people">People</Nav.Link>
                            <div id="dropdown-content">
                                <div id="contents">All the contents are given bellow:
                                    <Link to="/faculty">Faculty</Link>
                                    <Link to="/staff">Staff</Link>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <Nav.Link className="mr-3 text-white" href="#resrarch">Research</Nav.Link>
                            <div id="dropdown-content">
                                <div id="contents">All the contents are given bellow:
                                    <Link to="/research">Research</Link>
                                    <Link to="/publications">Publications</Link>
                                    <Link to="/interest">Search | Research Interest</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="dropdown">
                        <Nav.Link className="mr-3 text-white" href="#announcement">Announcement</Nav.Link>
                            <div id="dropdown-content">
                                <div id="contents">All the contents are given bellow:
                                    <Link to="/event">News & Events</Link>
                                    <Link to="/honor">Honor Board</Link>
                                </div>
                            </div>
                        </div>

                        <Nav.Link className="mr-3 text-white"><Link className="text-white header-text" to="/noticeboard">Notice Board</Link></Nav.Link>

                        <div className="dropdown">
                            <Nav.Link className="mr-3 text-white" href="#news">News and Event</Nav.Link>
                            <div id="dropdown-content">
                                <div id="contents">All the contents are given bellow:
                                    <Link to="/gallery">Gallery</Link>
                                </div>
                            </div>
                        </div>
                        {
                            user && <Nav.Link className="mr-3 text-white"><Link className="text-white header-text" to="/admin">Admin Dashboard</Link></Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        </div>
    );
};

export default Header;