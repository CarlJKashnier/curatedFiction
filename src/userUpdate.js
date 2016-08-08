import React, {
    Component
} from 'react';
import './App.css';
import axios from './axios.min.js';
import {Link} from 'react-router';



class UserUpdate extends Component {
  constructor(props) {
      super(props);
      this.state = {
          userData: '',
          userID: '',
          userCity: '',
          userState: '',
        userLocation: ''
      };
  }

  componentWillMount() {
  if (this.state.userData) {} else {
      axios.get('/api/user_data').then(function(varData) {
          var nameToUse = varData.data.username.facebook.name;
          var idToUse = varData.data.username.facebook.id;
          var cityToUse = varData.data.username.facebook.city || "City";
          var stateToUse = varData.data.username.facebook.state || "State";
          var locToUse = varData.data.username.facebook.whereITrade || "Location";
console.log(cityToUse + " " + stateToUse + " " + locToUse)
          this.setState({
              userData: nameToUse,
              userID: idToUse,
              userCity: cityToUse,
              userState: stateToUse,
              userLocation: locToUse
          });
      }.bind(this));
  }
}
    render() {
//Add logic to solve render issue
var name = this.state.userData
var id = this.state.userID;
var city = this.state.userCity;
var state = this.state.userState;
var location = this.state.userLocation;
      return (
      <div><form method="post" action="/api/updateUser/" >
            <h3> User Update for {name}< /h3>
            City <input type="text" name="City" placeholder={city}/><br/>
            State <input type="text" name="State" placeholder={state}/><br/>
            Location <input type="text" name="Location" placeholder={location}/><br/>

            <br/><input type="submit" value="Submit"/>
            </form></div>
        )
    }

}

export default UserUpdate;
