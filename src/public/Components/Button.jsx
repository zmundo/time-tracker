import React from 'react';

const Button = () => {
  const consoleLog = () => {
    console.log('Clicked');
  };
  
  return (<button type="button" onClick={consoleLog}>Click Me</button>);
};

export default Button;
