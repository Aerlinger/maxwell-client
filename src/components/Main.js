require('normalize.css/normalize.css');
require('styles/App.css');

import { Button } from 'react-bootstrap';

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

const buttonsInstance = (
    <Button>Click me!</Button>
);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>

        {buttonsInstance}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
