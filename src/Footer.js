import React from 'react';
import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-container">
            <MDBFooter color="blue" className=" pt-4 mt-0">
                <MDBContainer fluid className="text-center text-md-left">
                  <MDBRow>
                    <MDBCol md="6" className="ml-auto align-items-center bg-dark text-white">
                      <h5 className="title">Useful Links</h5>
                      <ul>
                        <li className="list-unstyled text-white">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="list-unstyled">
                          <Link to="/admission">Admission</Link>
                        </li>
                        <li className="list-unstyled">
                          <Link to="/notice">Notice</Link>
                        </li>
                        <li className="list-unstyled">
                          <Link to="/gallery">Gallery</Link>
                        </li>
                      </ul>
                    </MDBCol>
                    <MDBCol md="6" className="ml-auto align-items-center bg-dark text-white">
                      <h5 className="title">Contact us</h5>
                      <ul>
                        <li className="list-unstyled">
                          <a href="#facebook">Facebook</a>
                        </li>
                        <li className="list-unstyled">
                          <a href="#twiter">Twitter</a>
                        </li>
                        <li className="list-unstyled">
                          <a href="#pinterest">Pinterest</a>
                        </li>
                        <li className="list-unstyled">
                          <a href="#linkedin">Linkedin</a>
                        </li>
                      </ul>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                  <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright all reserved by Ferdausy Khatun
                  </MDBContainer>
                </div>
              </MDBFooter>
            </div>
        </div>
    );
};

export default Footer;