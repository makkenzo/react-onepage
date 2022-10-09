import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const FeaturesSection = () => {
    return (
        <>
            <p className="features-p">FEATURES</p>
            <h1 className="features-h1">
                The latest & greatest in phone
                <br /> photography.
            </h1>
            <Row xs={1} md={3} className="g-6 my-cards">
                <Col>
                    <Card className="card-1">
                        <div className="overlap">
                            <img className="my-card-img" src={require('../img/cards/card1-calendar-view.png')} alt="" />
                            <Card.Body>
                                <Card.Title className="text-center card-1-h5">Calendar view</Card.Title>
                                <Card.Text className="text-center card-p">
                                    Lorem ipsum dolor sit amet,
                                    <br /> consectetur adipiscing elit. Nullam
                                    <br /> scelerisque aliquam odio et faucibus.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col>
                    <Card className="card-2">
                        <div className="overlap">
                            <img className="my-card-img" src={require('../img/cards/card2-lists.png')} alt="" />
                            <Card.Body>
                                <Card.Title className="text-center card-2-h5">Lists</Card.Title>
                                <Card.Text className="text-center card-p">
                                    Dolor sit amet urna turpis. Mauris
                                    <br /> euismod elit et nisi ultrices, ut
                                    <br /> faucibus orci tincidunt.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col>
                    <Card className="card-3">
                        <div className="overlap">
                            <img className="my-card-img" src={require('../img/cards/card3-varied-type.png')} alt="" />
                            <Card.Body>
                                <Card.Title className="text-center card-3-h5">Varied type</Card.Title>
                                <Card.Text className="text-center card-p">
                                    Nulla rhoncus feugiat eros quis
                                    <br /> consectetur. Morbi neque ex,
                                    <br /> condimentum dapibus congue.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col>
                    <Card className="card-4 mt-3">
                        <div className="overlap">
                            <img className="my-card-img" src={require('../img/cards/card4-split-screen.png')} alt="" />
                            <Card.Body>
                                <Card.Title className="text-center card-4-h5">Split-screen</Card.Title>
                                <Card.Text className="text-center card-p">
                                    Vestibulum ultrices, orci nec egestas
                                    <br /> pharetra, ligula est semper enim,
                                    <br /> nec auctor sapien leo nec purus.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col>
                    <Card className="card-5 mt-3">
                        <div className="overlap">
                            <img className="my-card-img" src={require('../img/cards/card5-uploads.png')} alt="" />
                            <Card.Body>
                                <Card.Title className="text-center card-5-h5">Uploads</Card.Title>
                                <Card.Text className="text-center card-p">
                                    Duis tristique sed lorem a vestibulum.
                                    <br /> Cras commodo consequat orci, in
                                    <br /> convallis risus egestas non.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col>
                    <Card className="card-6 mt-3">
                        <div className="overlap">
                            <img className="my-card-img" src={require('../img/cards/card6-focus-mode.png')} alt="" />
                            <Card.Body>
                                <Card.Title className="text-center card-6-h5">Focus mode</Card.Title>
                                <Card.Text className="text-center card-p">
                                    Lorem sit amet urna turpis. Mauris
                                    <br /> euismod elit et nisi ultrices, ut
                                    <br /> faucibus orci tincidunt.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default FeaturesSection;
