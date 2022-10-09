import React from 'react';

import { Card, Col, Row, Button } from 'react-bootstrap';

const PricingSection = () => {
    return (
        <div className="text-center pricing">
            <p>Pricing</p>
            <h1>A plan for every need.</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                <br /> scelerisque aliquam odio et faucibus.
            </p>
            <Row xs={1} md={3} className="g-3 my-pricing-cards">
                <Col>
                    <Card className="pricing-card">
                        <Card.Body>
                            <Card.Title className="pricing-card-1-title">Standard</Card.Title>
                            <p className="pricing-card-1-p">$9</p>
                            <p className="pricing-card-p2">Monthly</p>
                            <Button className="pricing-card-1-btn">Buy now</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="pricing-card">
                        <Card.Body>
                            <Card.Title className="pricing-card-2-title">Premium</Card.Title>
                            <p className="pricing-card-2-p">$99</p>
                            <p className="pricing-card-p2">Annualy</p>
                            <Button className="pricing-card-2-btn">Buy now</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="pricing-card">
                        <Card.Body>
                            <Card.Title className="pricing-card-3-title">Lifetime</Card.Title>
                            <p className="pricing-card-3-p">$149</p>
                            <p className="pricing-card-p2">up front</p>
                            <Button className="pricing-card-3-btn">Buy now</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default PricingSection;
