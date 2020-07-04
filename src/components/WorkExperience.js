import React from 'react';
import '../App.css';

function WorkExperience() {
    return (
        <div className="light-grey-background">
            <div className="container padding-30">
                <h2 className="margin-top-20">Work Experience</h2>
                <div className="row margin-top-60 justify-content-md-center work-cards">
                    <div className="col-lg-5 col-md-6">
                        <div className="card work-card">
                            <img src="/cwh.jpg" className="card-img-top margin-top-20 margin-bottom-70 cwh-pic" alt="Canadian Web Hosting" />
                            <div className="card-body">
                                <h5 className="card-title text-center margin-top-20">Canadian Web Hosting</h5>
                                <p className="card-text text-center">Junior Web Developer (Co-op)</p>
                                <ul className="margin-top-20">
                                    <li>Collaborated with marketing team and other developers on the redesign of the company’s website to attract new customers (<a href="canadianwebhosting.com">candianwebhosting.com</a>).</li>
                                    <li>Hands-on experience with React, Jade, and JavaScript.</li>
                                    <li>Canadian Web Hosting is the leader in Web and Cloud hosting in Canada.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 work-col">
                        <div className="card work-card">
                            <div className="padding-20">
                                <img src="/ubc.png" class="card-img-top" alt="UBC" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center margin-top-20">UBC LFS Learning Centre </h5>
                                <p className="card-text text-center">Assistant Software Developer (Co-op)</p>
                                <ul className="margin-top-20">
                                    <li>Developed a Qualtrics API planned to be used for course surveys given to students.</li>
                                    <li>Wrote tests for Lab Certification Tracker software.</li>
                                    <li>Designed and implemented Front End for Teacher Assistant Application program.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;