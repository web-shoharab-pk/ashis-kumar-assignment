import React from 'react';
import './Style.css';
import footerImg from '../images/footerImg.png'

const Footer = () => {
    return (
        <main className="footer mt-5">
            <img  src={footerImg} className="img-fluid " alt="" />
        </main>
    );
};

export default Footer;