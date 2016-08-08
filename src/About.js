import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router';


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Curated Fiction</h2>
                    <h3>It isn't about the item, it is about the item's story. <br/><Link to="/">Back to curiosities</Link></h3>
                </div>
                <p className="App-intro">
                    Welcome to a FreeCodeCamp.com project by Carl J Kashnier.<br/><br/>
                  I did this instead of the book trading club because this project has been kicking around in my head for a while now(still trading, just not books). I built this using create-react-app, node, express, Mongo, React Router, Passport.js, the passport.js facebook stratagy, also Mongoose, and connect mongo-store. The react portion of the site is minimized using webpack, bable, ES6, JSX... Using react while extremly brutal in the time and errors is paying huge dividends on precevied speed.<br/> Hope you enjoy,<br/>Carl Kashnier<br/>
                  <a href="http://www.github.com/CarlJKashnier/">My Github.com profile!!</a>
                    </p>
            </div>
        );
    }
}

export default App;
