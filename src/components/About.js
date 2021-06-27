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
                        <p className="margin-top-20">Hi, I am a recent Grad from UBC who was born and raised in Vancouver, British Columbia. I majored in both Computer Science and Statistics which I believe go well together in areas such as Machine Learning and Algorithm Design.  Currently, I am looking for New Grad Software positions where I can refine my skills and grow as a Developer.</p>
                        <p>Note: I am a CANADIAN CITIZEN who was born and raised in Vancouver, BC.</p>
                        <a href="/Austin-Kwok-Resume.pdf" class="btn btn-info margin-top-20" role="button" aria-pressed="true">Resume</a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default About;