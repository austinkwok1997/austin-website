import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
    return (
        <div className="Header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container header-container">
                    <Link to="/">
                        <h5 class="navbar-brand margin-bottom-0">Austin Kwok</h5>
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a href="#About" class="nav-link">About</a>
                            </li>
                            <li class="nav-item">
                                <a href="#Experience" class="nav-link">Experience</a>
                            </li>
                            <li class="nav-item">
                                <a href="#Projects" class="nav-link">Projects</a>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact-me">
                                    <a href="" class="nav-link">Contact Me</a>
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