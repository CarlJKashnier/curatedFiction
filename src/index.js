import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AddCurio from './addCurio';
import About from './About';
import Manage from './manage';
import UpdateUser from './updateuser.js'
import './index.css';
import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/addCurio" component={AddCurio}/>
        <Route path="/manage/:id" component={Manage}/>
        <Route path="/updateuser" component={UpdateUser}/>

    </Router>
), document.getElementById('root'));
