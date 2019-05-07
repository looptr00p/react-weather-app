import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <div>
        <footer className="footer is-primary">
            <div className="container">
                <div className="columns">
                <div className="column">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="column has-text-right">
                    <a className="icon" href="#"><i className="fa fa-facebook"></i></a>
                    <a className="icon" href="#"><i className="fa fa-twitter"></i></a>
                </div>
                </div>
            </div>
        </footer>
      </div>
    );
};

export default Footer;
