import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/contact-me' component={Contact}></Route>
        </Switch>
    );
}

export default Main;