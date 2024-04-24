import React from 'react';
import '../App.css';

function About() {
    return (
        <div id="About" className="container padding-60">
            <div className="row">
                <div className="col-md-4 margin-top-20">
                    <img className="profile" src="/profile.jpg" alt="profile" />
                </div>
                <div className="col-md-8 margin-top-20">
                    <div>
                        <h2 className="margin-top-20 about-me">About Me</h2>
                        <p className="margin-top-20">Hi, my name is Austin and I'm a Software Developer with 3 years of experience. In 2020, I graduated from the University of British Columbia with a double major in Computer Science and Statistics. I currently work for D2L which is a Learning Management Software company. </p>
                        <a href="/Austin-Kwok-Resume.pdf" class="btn btn-info margin-top-20" role="button" aria-pressed="true">Resume</a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default About;