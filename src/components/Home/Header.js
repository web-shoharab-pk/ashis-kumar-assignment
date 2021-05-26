import React from 'react';
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import headerImg from '../images/headerImg.png'

const Header = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-4 p-5">
                    <h1 style={{fontSize: '80px', marginTop: '100px'}}>
                        Digital <br /> marketing
                    </h1>

                    <h4 style={{color: '#845BFF', marginTop: '100px'}}>
                        Targeted and interactive marketing of goods and services
                    </h4>

                    <h5 className="my-5">Sign up and get a discount</h5>

                    <button className="signUpBtn mt-3">SIGN UP <FontAwesomeIcon icon={faPlay} /></button>
                </div>
                <div className="col-md-8 p-5"> 
                    <img style={{width: '1000px'}} className="img-fluid " src={headerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;