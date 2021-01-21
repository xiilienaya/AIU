import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Switch,Route} from 'react-router-dom'
import './index.css';
import App from './App';
import SignIn from './SignIn/Signin';
import Home from './share/Home';
import TravelBook from './Travlebook/TravelBook';
import Write from './Travlebook/Write';
import My from './MySpace/MySpace';
import Personal from './Personal/Peronal';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={SignIn} />  
            <Route exact path="/home" component={Home} />
            <Route exact path='/travelbook' component={TravelBook} />
            <Route exact path='/write' component={Write} />
            <Route exact path='/space' component={My} />
            <Route exact path='/personal' component={Personal} />
        </Switch>
    </Router>
        , document.getElementById('root')
);


