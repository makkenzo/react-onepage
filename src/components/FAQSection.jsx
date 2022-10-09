import React from 'react';
import { Row, Col } from 'react-bootstrap';

const FAQSection = () => {
    return (
        <>
            <h1 className="faq">FAQ</h1>
            <p className="freq-ask-quest">Some questions & some answers</p>
            <div className="questions">
                <Row>
                    <Col>
                        <h5>What devices does H(app)y support?</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et
                            faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus
                            congue et, vulputate ut ligula.
                        </p>
                    </Col>
                    <Col>
                        <h5>How many megapixels does H(app)y support?</h5>
                        <p>
                            Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et,
                            vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices,
                            ut faucibus orci tincidunt. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi
                            ultrices, ut faucibus orci tincidunt.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <h5>Will my photos magically be more beautiful if I use this app?</h5>
                        <p>
                            Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci
                            tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis
                            risus egestas non. Nulla efficitur auctor hendrerit.
                        </p>
                    </Col>
                    <Col>
                        <h5>How many photos can I store in H(app)y?</h5>
                        <p>
                            Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien
                            leo nec purus. Etiam ut orci varius, faucibus libero ac, cursus quam. Aenean porta neque
                            eget consequat fringilla.
                        </p>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default FAQSection;
