import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import Icon from '../images/Fake-icon.png';
import Button from './Button';

const App = () => (
  <div>
    <h1 className="hello">Hello from the app!</h1>
    <img src={Icon} alt="ms paint skills" />
    <Button />
  </div>
);
// export default App;
ReactDOM.render(<App />, document.getElementById('root'));
