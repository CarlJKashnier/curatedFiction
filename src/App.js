import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router';
import LoginComp from './loginComp.js';
import CuriosComp from './Curios.js';


class App extends Component {
    render(props) {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Curated Fiction</h2>
                    <h3>It isn't about the item, it is about the item's story.<br/>
                        <Link to="/about">About Curated Fiction</Link>
                    </h3>
                    <LoginComp/>

                </div>
                <p className="App-intro">
                    Our current selection of curiosities:
                </p>
                <CuriosComp/>
            </div>
        );
    }
}

export default App;
