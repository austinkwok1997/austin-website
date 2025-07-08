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
                                        <p className="card-text">Software Engineer 2 (Current)</p>
                                        <ul className="margin-top-20">
                                            <li>Led critical sections for the longstanding and highly requested automatic quiz submission feature from start to finish, which involved integration between both the instructor and student views and upkeep of backwards compatibility with legacy code. Since launch there has been an average of 7 million quiz attempts per week that uses this feature.</li>
                                            <li>Led the development of an Analytics Builder tool integrated with AWS QuickSight, enabling non-technical users to create custom data visualizations through a no-code interface and generative AI. I planned and prioritized user stories to align with product goals and technical feasibility.</li>
                                            <li>Researched, created schemas, and wrote tests for an events-based system that ingests more than 10 million meta events per week to generate quiz datasets for school administrative and compliance requirements.</li>
                                            <li>Updated database model and schemas and performed the necessary database migration steps on production to streamline the process for instructors to set time limits in the quizzing tool and enable synchronization of start and end times across all students taking a quiz, affecting more than 3.2 million students on a regular basis.</li>
                                            <li>Wrote an integration as part of the CI/CD pipeline that posts build numbers to Github PRs and Rally stories automatically during deployment phase, which saved the organization more than 86.75 work hours per month in manually tracking builds.</li>
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
                                            <li>Worked with a small team of 2-3 people on a grocery delivery mobile app called Luniu Mall on both Apple iOS and Google Android: <a href="https://luniumall.com/app">https://luniumall.com/app</a>.</li>
                                            <li>Designed and implemented numerous full stack features from scratch such as user reviews, user posts, and points rewards system for the app, which is currently being used by more than 10,000 users.</li>
                                            <li>Improved load time on the product reviews page by 5 seconds through render optimizations made to the list component and implementing infinite scroll.</li>
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
                                            <li>Built a trivia mobile game called FrancoQuiz on both Apple iOS and Google Android for the French speaking community in BC which consists of 330,000 people: <a href="https://www.ffcb.ca/le-francoquiz/">https://www.ffcb.ca/le-francoquiz/</a></li>
                                            <li>Built a wizard style web application that provides step-by-step guidance for non-technical employees to easily add trivia questions to the trivia question bank.</li>
                                            <li>Used Unity for the mobile game and React JS for the web application, created a backend RESTful API using Strapi, and set up a PostgreSQL database which stored trivia questions and meta data.</li>
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