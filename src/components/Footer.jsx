import React from 'react';

const Footer = () => {
    return (
        <div className="text-center footer">
            <a href="#">
                <img src={require('../img/footer/footer-logo.png')} alt="" />
            </a>

            <div className="social-media d-flex justify-content-center">
                <a href="#">
                    <img src={require('../img/footer/twitter.png')} alt="" />
                </a>
                <a href="#">
                    <img src={require('../img/footer/insta.png')} alt="" />
                </a>
                <a href="#">
                    <img src={require('../img/footer/fb.png')} alt="" />
                </a>
            </div>

            <p>
                Powered by <strong>Webflow</strong>. All rights reserved by <strong>makkenzo inc</strong>.
            </p>
        </div>
    );
};

export default Footer;
