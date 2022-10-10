import React, { useState } from 'react';
import { Nav, Button, Modal } from 'react-bootstrap';

const NavigationBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <Nav.Link eventKey="link-2" href="#pricing">
                        Pricing
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" href="#testimonials">
                        Testimonials
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="justify-content-end mr-0 pr-0">
                    <Nav.Link eventKey="link-4">Instructions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Button className="my-nav-button" variant="dark" onClick={handleShow}>
                        DOWNLOAD
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Are you sure you want to download?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Don't forget to leave a review :)
                            <br />
                            <br />
                            In case of any problems write to nekgo2009@gmail.com
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="dark" onClick={handleClose}>
                                Download
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default NavigationBar;
