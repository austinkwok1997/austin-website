import React from 'react';
import '../App.css';

function WorkExperience() {
    return (
        <div className="light-grey-background">
            <div id="Experience" className="container padding-60">
                <h2 className="margin-top-20">Work Experience</h2>
                <div className="row margin-top-20 justify-content-md-center work-cards">
                    <div className="col-lg-12 col-md-12 work-col">
                        <div className="card work-card work-card-d2l">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <img src="/D2L_Logo.jpg" class="card-img-top" alt="D2L" />
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">D2L Corporation</h3>
                                        <p className="card-text">Software Developer 2 (Current)</p>
                                        <ul className="margin-top-20">
                                            <li>Led critical sections for the longstanding and highly requested automatic quiz submission feature from start to finish, which involved integration between both the instructor and student views and upkeep of backwards compatibility with legacy code. Since launch there has been an average of 2 million quiz attempts per week that uses this feature.</li>
                                            <li>Supported and triaged quizzing related customer escalations on production to ensure SLAs of 99.9% uptime and tiered response times (ranging from 24 hours to 3 days) are prioritized and met accordingly.</li>
                                            <li>Researched, created schemas, and wrote tests for an events-based system that generates quiz datasets for schools to analyze. This is part of an initiative that enables potential savings of up to $2.5 million per year.</li>
                                            <li>Updated database model and schemas related to the quizzing tool’s time limit settings and performed the necessary migration steps on production to streamline the process for instructors to set time limits.</li>
                                            <li>Wrote an integration that posts build numbers to Github PRs and Rally stories automatically during deployment phase, which saved the organization more than 86.75 work hours per month in manually tracking builds.</li>
                                            <li>Built multiple web components and APIs for the new quiz editing experience on top of existing legacy code using C#, Lit/Lit 2.0, JavaScript, XML, and MSSQL.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 work-col">
                        <div className="card work-card">
                            <div className="row">
                                <div className="col-lg-4 col-mid-4 padding-20">
                                    <img src="/luniu-mall.png" class="card-img-top" alt="Luniu Mall" />
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">Luniu Mall</h3>
                                        <p className="card-text">Front End Developer</p>
                                        <ul className="margin-top-20">
                                            <li>Worked with a small team of 2-3 people on an Online Grocery Delivery app for iOS, Android, and Mobile Web Browsers. (<a href="https://luniumall.com/">luniumall.com</a>).</li>
                                            <li>Designed and implemented numerous features on my own such as User Reviews, User Posts, and Points Rewards System for the app, which is currently being used by 10k+ users.</li>
                                            <li>Utilized React Native, Typescript, Expo, Android Studio, and XCode to produce apps for all mobile platforms.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 work-col">
                        <div className="card work-card">
                            <div className="row">
                                <div className="col-lg-4 col-mid-4 padding-20">
                                    <img src="/ffcb.png" class="card-img-top" alt="La Fédération des francophones de la Colombie-Britannique" />
                                </div>
                                <div className="col-lg-8 col-mid-8">
                                    <div className="card-body">
                                        <h3 className="card-title">La Fédération des francophones de la Colombie-Britannique</h3>
                                        <p className="card-text">Junior Application Developer (Contract)</p>
                                        <ul className="margin-top-20">
                                            <li>Built a Trivia Mobile Game for the Francophone community in BC using Unity, Strapi, and PostgresSQL.</li>
                                            <li>Created backend RESTful API using Strapi, setup a PostgreSQL database, and built a “Wizard” application in React JS for non-technical employees to add trivia questions to the database.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 work-col">
                        <div className="card work-card">
                            <div className="row">
                                <div className="col-lg-4 col-mid-4 padding-20">
                                    <img src="/ubc.png" class="card-img-top" alt="UBC" />
                                </div>
                                <div className="col-lg-8 col-mid-8">
                                    <div className="card-body">
                                        <h3 className="card-title">UBC LFS Learning Centre </h3>
                                        <p className="card-text">Assistant Software Developer (Co-op)</p>
                                        <ul className="margin-top-20">
                                            <li>Developed a Qualtrics API planned to be used to integrate course surveys into the UBC online systems.</li>
                                            <li>Wrote unit tests for Lab Certification Tracker software.</li>
                                            <li>Designed and implemented Front End for Teacher Assistant Application program using React JS.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="card work-card">
                            <div className="row">
                                <div className="col-lg-4 col-mid-4">
                                    <img src="/cwh.jpg" className="card-img-top margin-top-20 margin-bottom-70 cwh-pic" alt="Canadian Web Hosting" />
                                </div>
                                <div className="col-lg-8 col-mid-8">
                                    <div className="card-body">
                                        <h3 className="card-title">Canadian Web Hosting</h3>
                                        <p className="card-text">Junior Web Developer (Co-op)</p>
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
            </div>
        </div>
    );
}

export default WorkExperience;