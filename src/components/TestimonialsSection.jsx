import React from 'react';

import { Row, Col, Card } from 'react-bootstrap';

const TestimonialsSection = () => {
    return (
        <>
            <div className="text-center testimonials">
                <p>Testimonials</p>
                <h1>Don't take our word for it.</h1>
                <p>See what our customers are saying.</p>
            </div>
            <Row xs={1} md={3} className="g-3 testimonials-cards">
                <Col>
                    <Card className="testimonial-card">
                        <Card.Body>
                            <p className="testimonial-card-p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus.
                            </p>
                            <div className="d-flex align-items-center testimonial">
                                <img
                                    className="testimonial-img"
                                    src={require('../img/testimonials/testimonial1.png')}
                                    alt=""
                                />
                                <div className="d-flex flex-column credentials">
                                    <p className="testimonial-name">Pam Beesly</p>
                                    <p className="testimonial-p2">Dunder Mifflin</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="testimonial-card">
                        <Card.Body>
                            <p className="testimonial-card-p">
                                Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.
                                Aenean porta neque eget consequat fringilla.
                            </p>
                            <div className="d-flex align-items-center testimonial">
                                <img
                                    className="testimonial-img"
                                    src={require('../img/testimonials/testimonial2.png')}
                                    alt=""
                                />
                                <div className="d-flex flex-column credentials">
                                    <p className="testimonial-name">Michael Scott</p>
                                    <p className="testimonial-p2">Dunder Mifflin</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="testimonial-card">
                        <Card.Body>
                            <p className="testimonial-card-p">
                                Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor
                                sapien leo nec purus.
                            </p>
                            <div className="d-flex align-items-center testimonial">
                                <img
                                    className="testimonial-img"
                                    src={require('../img/testimonials/testimonial3.png')}
                                    alt=""
                                />
                                <div className="d-flex flex-column credentials">
                                    <p className="testimonial-name">Angels Schrute</p>
                                    <p className="testimonial-p2">Dunder Mifflin</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default TestimonialsSection;
