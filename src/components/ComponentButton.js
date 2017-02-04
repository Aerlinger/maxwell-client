require('normalize.css/normalize.css');

import ButtonStyle from '../styles/ComponentButton.css';

import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

let TransformerImage = require('../images/Transformer2.png');
import React from 'react';

class ComponentButton extends React.Component {
  hotkey() {
    if (this.props.hotkey) {
      return <span className={ButtonStyle.hotkey}>{this.props.hotkey}</span>
    }
  }

  render() {
    let props = this.props;

    let tooltip = <Tooltip id="tooltip">Tooltip <strong>{props.children}</strong> {props.children}</Tooltip>

    return (
        <div className={ButtonStyle.root} ref="placing">
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <Button >
              <img className={ButtonStyle.icon} src={TransformerImage} alt={props.children}/>

              {this.hotkey.bind(this)()}
            </Button>
          </OverlayTrigger>

          <div className={ButtonStyle.component_label}>{props.children}</div>
        </div>
    );
  }
}

ComponentButton.defaultProps = {};

export default ComponentButton;
