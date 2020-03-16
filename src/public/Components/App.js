import React from "react";
import ReactDOM from "react-dom";
import '../css/style.css';
import icon from '../images/fake-icon.png';
import Button from './Button.js';

class App extends React.Component{



    render(){
        return (
            <div>
                <h1 className="hello">Hello from the app!</h1>
                <img src={icon} alt='ms paint skills'/>
                <Button/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));