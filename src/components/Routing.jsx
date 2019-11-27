import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import landingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Contacts from './Contacts';
import Faq from './Faq';
import About from './About';
import Vacancy from './Vacancy';

import React from 'react'

export default function Routing() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={landingPage} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/Faq" component={Faq} />
                <Route exact path="/Vacancy" component={Vacancy} />
                <Route exact path="/About" component={About} />
            </Switch>
        </Router>
    )
}
