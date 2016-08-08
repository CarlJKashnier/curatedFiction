import React, {
    Component
} from 'react';
import './App.css';
import axios from './axios.min.js';
import {Link} from 'react-router';



class CuriosComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Curios: [],
            userName: '',
            userID: ''
        }
    }

    componentWillMount() {
function firstPromise(){return axios.get('/api/curios');}
function secondPromise(){return axios.get('/api/user_data2');}
axios.all([firstPromise(), secondPromise()]).then(axios.spread(function(firstData, secondData){

  let curios = firstData.data;
  if (secondData.data.username !== null) {
  var nameToUse = secondData.data.username.facebook.name;
  var idToUse = secondData.data.username.facebook.id;
}else{
  var nameToUse = "LoggedOut"
}
  this.setState({
      Curios: curios,
        userName: nameToUse,
        userID: idToUse
  });
}.bind(this)));


        }
render() {
  var userName = this.state.userName;
  var userID = this.state.userID;
    if (this.state.Curios.length > 0) {
        var tacoToRender = this.state.Curios.map(function(text, i) {
            if (text.title.length > 32) {
                var title = text.title.substring(0, 29) + "...";
            } else {
                title = text.title;
            }

            if (text.description.length > 255) {
                var description = text.description.substring(0, 252) + "...";
            } else {
                description = text.description;
            }


            if(text.tradedToID === userID && userID !== undefined) {
              console.log(userID + " " + text.tradedToID)
              var iWantThis = "You got this"
            } else {
            if (text.userName === userName) {
              if (text.tradeOfferedBy.length < 1) {
                var iWantThis = "This item is yours.";
              } else {
                let apiAddr = "/manage/" + text._id;
                var iWantThis = (
                    <Link to={apiAddr}>Manage Trades</Link>

                );
              }
            } else {
              if (userName === "LoggedOut"){
                var iWantThis = "Please login";
              } else {

                var tradeOfferedBy = text.tradeOfferedBy;

                var alreadyOffered = false;
                if(tradeOfferedBy.length < 1){

                  let apiAddr = "/api/iWantThis/" + text._id;
                  var iWantThis = (
                      <form method="post" action={apiAddr}>
                          <button type="submit" value="submit">I want this</button>
                      </form>
                  );
                } else {
                  tradeOfferedBy.map(function(text, i){
                    if (text[4] == userID){
                      alreadyOffered = true;
                    }
                    return;
                  })
                }
                if (alreadyOffered === true){
                  var iWantThis = "You've already offered"
                } else {
                  if(text.userName.length <=1){
                    var iWantThis = "Already Traded"
                  } else {


                  let apiAddr = "/api/iWantThis/" + text._id;
                  var iWantThis = (
                      <form method="post" action={apiAddr}>
                          <button type="submit" value="submit">I want this</button>
                      </form>
                  );
                }
                }
}
            }
}

                return ( <
                    div key = {
                        i
                    }
                    ref = {
                        i
                    }
                    className = {
                        "App-card"
                    } >
                    <
                    h2 > {
                        text.title
                    } < /h2> <
                    p > < br / > {
                        text.description
                    } < br / >
                    <
                    b > {
                        text.userName
                    } < /b> - {
                        text.tradeOfferedBy.length
                    } < /p>

{iWantThis}
                    < /
                    div > );

            })
          }
         else {

            tacoToRender = < div > Loading Our Curiosities < /div>
        };

        return ( < div > {
                tacoToRender
            } < /div>)
        }
    }

    export default CuriosComp;
