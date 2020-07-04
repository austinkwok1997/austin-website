import React from 'react';
import '../App.css';

function Banner() {
    return (
        <div className="margin-top-56">
            <div className="vertical-crop">
                <img className="banner" src="/banner.png" alt="banner" />
                <h1 className="banner-text">AUSTIN KWOK</h1>
            </div>
        </div >
    );
}

export default Banner;