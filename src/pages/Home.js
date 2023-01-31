import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import '../App.css';

function Home() {
    return (
        <div className="Home">
            <Banner />
            <About />
            <WorkExperience />
            <Projects />
            <Contact />
            <div className="bg-secondary padding-10">
                <p className="text-white text-center margin-bottom-0">Austin Kwok</p>
            </div>
        </div >
    );
}

export default Home;