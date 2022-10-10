import React, { useState } from 'react';

import { Row, Col, Button, Modal, OverlayTrigger, Popover } from 'react-bootstrap';

const HeroSection = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Read our docs!</Popover.Header>
            <Popover.Body>We wrote in the most understandable language that even a child can understand.</Popover.Body>
        </Popover>
    );

    return (
        <>
            <Row className="justify-content-md-center my-dark-icons">
                <Col xs lg="5">
                    <img className="hero-left" src={require('../img/logo-xl.png')} alt="" />
                    <h1 className="hero-h1">
                        The future of
                        <br /> digital photos.
                    </h1>
                    <p className="hero-p">
                        The H(app)y app is the latest & greatest in
                        <br /> phone photography. It's available in the
                        <br /> App Store right now. Go check it out!
                    </p>
                    <div>
                        <Button className="my-nav-button hero-button" variant="dark" onClick={handleShow}>
                            DOWNLOAD
                        </Button>
                        <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
                            <Button
                                className="my-nav-button"
                                variant="dark"
                                href="https://ru.reactjs.org/docs/getting-started.html"
                                target="_blank"
                            >
                                READ MORE
                            </Button>
                        </OverlayTrigger>

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
                    </div>
                </Col>
                <Col xs lg="5" className="d-flex justify-content-end">
                    <img className="hero-img" src={require('../img/phone.png')} alt="" />
                </Col>
            </Row>
        </>
    );
};

export default HeroSection;
