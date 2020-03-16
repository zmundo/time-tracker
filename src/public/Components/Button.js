import React from "react";

class Button extends React.Component {
    ConsoleLog () {
        console.log("Clicked");
    }

    render() {
        return (<button onClick={this.ConsoleLog}>Click Me</button>);
    };
}

export default Button;