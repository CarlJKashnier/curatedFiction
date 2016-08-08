import React, {
    Component
} from 'react';
import './App.css';



class IntakeCurio extends Component {
    render() {return (
      <div><form method="post" action="/api/addCurio" >
            <h3> Title < /h3> <input type="text" name="title"/>
            <h3> Description </h3><input type="text" name="description"/>
            <br/><br/><input type="submit" value="Submit"/>
            </form></div>
        )
    }

}

export default IntakeCurio;
