import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const HeroSection = () => {
    return (
        <>
            <Row className="justify-content-md-center">
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
                        <Button className="my-nav-button hero-button" variant="dark">
                            DOWNLOAD
                        </Button>
                        <Button className="my-nav-button" variant="dark">
                            READ MORE
                        </Button>
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
