import React from 'react';

import { Row, Col } from 'react-bootstrap';

const SpeedAndSecuritySection = () => {
    return (
        <>
            <Row className="justify-content-md-center">
                <Col xs lg="6" className="speed-left">
                    <img className="speed-img" src={require('../img/phone-speed.png')} alt="" />
                </Col>
                <Col xs lg="4" className="speed-right">
                    <p className="speed-header">Speed & security</p>
                    <h1 className="speed-h1">
                        State-of-the-art
                        <br /> processing capabilities.
                    </h1>
                    <p className="speed-p">
                        Lorem ipsum dolor sit amet, consectetur
                        <br /> adipiscing elit. Suspendisse varius enim in eros
                        <br /> elementum tristique. Duis cursus, mi quis viverra
                        <br /> ornare, eros dolor interdum nulla, ut commodo
                        <br /> diam libero vitae erat. Aenean faucibus nibh et
                        <br /> justo cursus id rutrum lorem imperdiet. Nunc ut
                        <br /> sem vitae risus tristique posuere.
                    </p>
                </Col>
            </Row>
        </>
    );
};

export default SpeedAndSecuritySection;
