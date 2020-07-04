import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
    return (
        <div className="Header">
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container header-container">
                    <h5 class="navbar-brand text-white margin-bottom-0">Austin Kwok</h5>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link to="/">
                                    <a class="nav-link text-white">Home <span class="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact-me">
                                    <a class="nav-link text-white">Contact Me</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    );
}

export default Header;