import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Switch,Route} from 'react-router-dom'
import './index.css';
import App from './App';
import SignIn from './SignIn/Signin';
import Home from './share/Home';
import TravelBook from './Travlebook/TravelBook'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={SignIn} />  
            <Route exact path="/home" component={Home} />
            <Route exact path='/travelbook' component={TravelBook} />  
        </Switch>
    </Router>
        , document.getElementById('root')
);


