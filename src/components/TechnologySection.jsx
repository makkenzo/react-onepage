import React from 'react';

import { Row, Col } from 'react-bootstrap';

const TechnologySection = () => {
    return (
        <>
            <Row className="justify-content-md-center">
                <Col xs lg="5">
                    <p className="technology-header">Technology</p>
                    <h1 className="technology-h1">
                        Use H(app)y to give your
                        <br /> digital photos some pop.
                    </h1>
                    <p className="technology-p">
                        Lorem ipsum dolor sit amet, consectetur
                        <br /> adipiscing elit. Suspendisse varius enim in eros
                        <br /> elementum tristique. Duis cursus, mi quis viverra
                        <br /> ornare, eros dolor interdum nulla, ut commodo
                        <br /> diam libero vitae erat. Aenean faucibus nibh et
                        <br /> justo cursus id rutrum lorem imperdiet. Nunc ut
                        <br /> sem vitae risus tristique posuere.
                    </p>
                </Col>
                <Col xs lg="5" className="d-flex justify-content-end">
                    <img className="technology-img" src={require('../img/phone-technology.png')} alt="" />
                </Col>
            </Row>
        </>
    );
};

export default TechnologySection;
