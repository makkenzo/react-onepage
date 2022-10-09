import React from 'react';

import { Row, Col } from 'react-bootstrap';

const DarkModeSection = () => {
    return (
        <>
            <div className="text-center dark-mode">
                <p>Dark mode</p>
                <h1>Also available in dark.</h1>
                <p>
                    Don't get blinded when using the H(app)y app at night, just turn
                    <br /> off the lights. Lorem ipsum dolor sit amet.
                </p>
                <img src={require('../img/phone-dark-mode.png')} alt="" />
            </div>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="light-pic">
                    <a href="#">
                        <img src={require('../img/light.png')} alt="" />
                    </a>
                </Col>
                <Col xs lg="2" className="dark-pic">
                    <a href="#">
                        <img src={require('../img/dark.png')} alt="" />
                    </a>
                </Col>
            </Row>
        </>
    );
};

export default DarkModeSection;
