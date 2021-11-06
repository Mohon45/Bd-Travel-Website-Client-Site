import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <div className="row py-4">
                    <div className="col-md-4">
                       <div className="d-flex">
                            <img src="https://i.ibb.co/8DJ6TL3/logo.png" alt="" />
                            <p className="ms-4 text-white">Download the BD Travel app for the fastest solution</p>
                       </div>
                       <div className="m-4">
                            <img src="https://i.ibb.co/Y7nkJdt/App-Store-footer.png" alt="" />
                            <img src="https://i.ibb.co/8B9S3C5/Google-Play-footer.png" alt="" />
                       </div>
                    </div>
                    <div className="col-md-4 quick-link">
                        <h4 className="text-white">Quick Links</h4>
                        <a href="#enterprice">EnterPrice</a>
                        <a href="#enterprice">About Us</a>
                        <a href="#enterprice">FAQ'S</a>
                    </div>
                    <div className="col-md-4 office-location text-white">
                        <h3>Office LOcation</h3>
                        <p>1297, Zero point, Shaheb Bazar, Rajshahi, Bangladesh</p>

                        <div className="contact">
                            <h4>Contact Us</h4>
                            <p>Email: bdtravel@gmail.com</p>
                            <p>Phone: 0177777733</p>
                        </div>
                    </div>
                </div>

            </Container>
            <hr/>
            <p style={{textAlign: "center"}}>&copy;Copyright-2021 Junior Developer. Developed by <span className="footer-intro">Md.Mohon</span></p>
        </div>
    );
};

export default Footer;