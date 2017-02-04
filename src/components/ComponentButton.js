require('!!raw!normalize.css/normalize.css');

import ButtonStyle from '../styles/ComponentButton.css';

import { Button } from 'react-bootstrap';

let yeomanImage = require('../images/yeoman.png');
import React from 'react';

class ComponentButton extends React.Component {
  render() {
    return (
      <Button className={ButtonStyle.root}>
        <img src={yeomanImage} width='20px' height='20px' alt='Yeoman Generator'/>
      </Button>
    );
  }
}

ComponentButton.defaultProps = {};

export default ComponentButton;
