import React from 'react';
import '../App.css';

function Projects() {
    return (
        <div id="Projects" className="container padding-60">
            <h2 className="margin-top-20 projects-title">Projects</h2>
            <div className="card margin-top-20">
                <div class="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="banner.png" alt="Submarine Wars" className="project-img" />
                        </div>
                        <div className="col-md-9">
                            <h4 className="project-card-title">Submarine Wars</h4>
                            <p>Defend your Country agaisnt a submarine attack in this 2D shooter game. Designed an Entity Management System that allowed new entities to be added efficiently (C++)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card margin-top-20">
                <div class="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="canssi.png" alt="Submarine Wars" className="project-img" />
                        </div>
                        <div className="col-md-9">
                            <h4 className="project-card-title">CANSSI NCSC Ferry Delays</h4>
                            <p>Utilized neural networks and other data analysis tools to find interesting properties of the data provided from BC Ferries. Managed to predict delays with a 85% success rate. (R, Python)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card margin-top-20">
                <div class="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="aldente.jpg" alt="Submarine Wars" className="project-img" />
                        </div>
                        <div className="col-md-9">
                            <h4 className="project-card-title">Online Restaurant Reservation Platform</h4>
                            <p>Online reservation platform for customers and restaurant owners. Played a major role in building the restaurant components for the app. (Meteor, React, MongoDB)(a1dente.herokuapp.com)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card margin-top-20">
                <div class="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="basketball.jpg" alt="Submarine Wars" className="project-img" />
                        </div>
                        <div className="col-md-9">
                            <h4 className="project-card-title">Fantasy Basketball Team Picker</h4>
                            <p>A program that constructs a fantasy basketball team givenstats from Draft Kings. Utilizes various algorithms to decide what players to add in a large list of players. <a href="https://fathomless-anchorage-41408.herokuapp.com/">Link to Project</a> (Python)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;