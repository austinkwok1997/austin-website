import React from 'react';
import '../App.css';

function Contact() {
    return (
        <div className="light-grey-background">
            <div id="Contact" className="container padding-60">
                <h2>Contact Me</h2>
                <ul className="list-group margin-top-20">
                    <li className="list-group-item">
                        <h5>Email: <a href="mailto:austin.kwok@protonmail.com">austin.kwok@protonmail.com</a></h5>
                    </li>
                    <li className="list-group-item">
                        <h5>Phone: <a href="tel:778-318-3399">(778)-318-3399</a></h5>
                    </li>
                    <li className="list-group-item">
                        <h5>LinkedIn: <a href="https://www.linkedin.com/in/austin-kwok/">https://www.linkedin.com/in/austin-kwok/</a></h5>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;