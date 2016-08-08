import React, {
    Component
} from 'react';
import './App.css';
import axios from './axios.min.js';
import {Link} from 'react-router';



class LoginComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: '',
            itToUser: ''
        }
    }

    componentWillMount() {
        if (this.state.userData) {} else {
            axios.get('/api/user_data').then(function(varData) {
                var nameToUse = varData.data.username.facebook.name;
                var idToUse = varData.data.username.facebook.id;
                this.setState({
                    userData: nameToUse,
                    userID: idToUse
                });
            }.bind(this));
        }
    }
    render() {

        //console.log(this.props.routes[0].items[0]);
        if (this.state.userData) {
          console.log("should render user");
          var welcomeLogin = (
                <div>Welcome {this.state.userData} <Link to="/addCurio">Add curiosity</Link> <Link to="/updateuser">Update My Location</Link></div>
              );
                 } else {
                     console.log("should render Nologin")
                   var welcomeLogin =  ( < form action = "login"
            method = "post" > < button type = "submit"
            value = "submit" > login < /button></form >);
        };
        return ( <
            span > {
                welcomeLogin
            } < /span>
        )
    }

}

export default LoginComp;
