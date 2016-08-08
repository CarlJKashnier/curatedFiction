import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router';
import LoginComp from './loginComp.js'
import CuriosComp from './Curios.js';
import UserUpdate from './userUpdate.js';

class UpdateUser extends Component {
    render(props) {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Curated Fiction</h2>
                    <h3>It isn't about the item, it is about the item's story.<br/>
                        <Link to="/about">About</Link>
                    </h3>
                    <Link to="/">Back to curiosities</Link>

                </div>
                <p className="App-intro">
                    The curiosity you wish to add:
                </p>
                <UserUpdate />
            </div>
        );
    }
}

export default UpdateUser;
