import React from 'react';

class Button extends React.Component {
  ConsoleLog() {
    this.clicked = console.log('Clicked');
  }

  render() {
    return (<button type="button" onClick={this.ConsoleLog}>Click Me</button>);
  }
}

export default Button;
