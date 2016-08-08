import React, {
    Component
} from 'react';
import './App.css';
import axios from './axios.min.js';
import { Router, Route, Link, browserHistory } from 'react-router'

class Manage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Curio: []
        }
    }
    componentWillMount() {
      console.log("In Mounting Manage")
      console.log(this.props.params.id)
      var paraID = this.props.params.id;
function firstPromise(){return axios.get('/api/curio/'+ paraID);}
function secondPromise(){return axios.get('/api/user_data2');}
axios.all([firstPromise(), secondPromise()]).then(axios.spread(function(firstData, secondData){
console.log(firstData)
  let curios = firstData.data.curio;
  if (secondData.data.username !== null) {
  var nameToUse = secondData.data.username.facebook.name;
  var idToUse = secondData.data.username.facebook.id;
}else{
  var nameToUse = "LoggedOut"
}
  this.setState({
      Curio: curios
  });
}.bind(this)));
}
render(){
  if (this.state.Curio.length !== 0){
var idStuff = this.state.Curio._id;
  var title = this.state.Curio.title;
  var trades = this.state.Curio.tradeOfferedBy;
  console.log(trades);

var tradesToRender = trades.map(function(trade, i){
  var apiAddr = "/api/accept/"+idStuff+"/"+trade[4];
  return <div>Name: {trade[0]}<br/>City: {trade[1]}<br/>State: {trade[2]}<br/>Location: {trade[3]}<br/><form method='post' action={apiAddr}><input type='submit' value='Submit'/></form></div>;
})
}else{
  title = "Loading";
}

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

        </p>
        <h2>{title}</h2>
        {tradesToRender}
    </div>
);
}
}
export default Manage;
