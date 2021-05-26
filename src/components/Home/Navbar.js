import React from 'react';
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light pt-5">
                <div class="container-fluid">
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav text-center ms-auto mb-2 mb-lg-0 fw-bold">
                            <li class="nav-item mx-5">
                                <a class="nav-link active text-light" aria-current="page" href="#/">About</a>
                            </li>
                            <li class="nav-item mx-5">
                                <a class="nav-link active text-light" href="#/">Team</a>
                            </li>
                            <li class="nav-item mx-5">
                                <a class="nav-link active text-light" href="#/">Pricing</a>
                            </li>
                            <li class="nav-item mx-5">
                                <a class="nav-link active text-light" href="#/">Issues</a>
                            </li>
                            <li class="nav-item mx-5">
                                <a class="nav-link active text-light" href="#/">Sign In</a>
                            </li>
                            <li class="nav-item mx-5 getMoreBtn">
                                <a class="nav-link active me-3  text-light" href="#/"><span className="me-5">Get More</span>  <FontAwesomeIcon icon={faSearch} /></a>
                            </li>
                        </ul>
                         
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;