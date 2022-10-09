import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const NavigationBar = () => {
    return (
        <div className="my-nav">
            <Nav className="justify-content-between need-to-color">
                <Nav.Item className="nav-logo">
                    <a href="#">
                        <img src={require('../img/logo.png')} alt="" />
                    </a>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" href="#features">
                        Features
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Pricing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Testimonials</Nav.Link>
                </Nav.Item>
                <Nav.Item className="justify-content-end mr-0 pr-0">
                    <Nav.Link eventKey="link-4">Instructions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Button className="my-nav-button" variant="dark">
                        GET TEMPLATE
                    </Button>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default NavigationBar;
