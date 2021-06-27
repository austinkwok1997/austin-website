import React from 'react';
import '../App.css';

function WorkExperience() {
    return (
        <div className="light-grey-background">
            <div id="Experience" className="container padding-60">
                <h2 className="margin-top-20">Work Experience</h2>
                <div className="row margin-top-20 justify-content-md-center work-cards">
                    <div className="col-lg-5 col-md-6 work-col">
                        <div className="card work-card">
                            <div className="padding-30">
                                <img src="/luniu-mall.png" class="card-img-top" alt="UBC" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center margin-top-20">Luniu Mall</h5>
                                <p className="card-text text-center">Front End Developer (Current)</p>
                                <ul className="margin-top-20">
                                    <li>Worked on a Online Grocery Delivery app on IOS, Android, and Mobile Web Browsers (<a href="https://luniumall.com/">luniumall.com</a>).</li>
                                    <li>Built numerous features such as User Reviews, User Posts, and Points Rewards System for the app.</li>
                                    <li>Utilized React Native, Expo, Android Studio, and XCode to produce apps for all mobile platforms.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 work-col">
                        <div className="card work-card">
                            <div className="padding-20">
                                <img src="/ffcb.png" class="card-img-top" alt="UBC" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">La Fédération des francophones de la Colombie-Britannique</h5>
                                <p className="card-text text-center">Junior Application Developer (Contract)</p>
                                <ul className="margin-top-20">
                                    <li>Built a Trivia Mobile Game for the Francophone community using Unity, Strapi and, PostgreSQL.</li>
                                    <li>Created backend RESTful API using Strapi, setup PostgreSQL database, and built a “Wizard” applicationin React for non-technical employees to usethe database.</li>
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
                    <div className="col-lg-5 col-md-6">
                        <div className="card work-card">
                            <img src="/cwh.jpg" className="card-img-top margin-top-20 margin-bottom-70 cwh-pic" alt="Canadian Web Hosting" />
                            <div className="card-body">
                                <h5 className="card-title text-center margin-top-20">Canadian Web Hosting</h5>
                                <p className="card-text text-center">Junior Web Developer (Co-op)</p>
                                <ul className="margin-top-20">
                                    <li>Collaborated with marketing team and other developers on the redesign of the company’s website to attract new customers (<a href="https://canadianwebhosting.com/">candianwebhosting.com</a>).</li>
                                    <li>Hands-on experience with React, Jade, and JavaScript.</li>
                                    <li>Canadian Web Hosting is the leader in Web and Cloud hosting in Canada.</li>
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