require('normalize.css/normalize.css');

import ButtonStyle from '../styles/ComponentButton.css';
import {ListItem} from 'material-ui/List';

import { Tooltip } from 'react-bootstrap';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

import React from 'react';

class ElementListItem extends React.Component {
  hotkey() {
    if (this.props.hotkey) {
      return <span className={ButtonStyle.hotkey}>{this.props.hotkey}</span>
    }
  }

  render() {
    let props = this.props;

    let tooltip = <Tooltip id="tooltip">Tooltip <strong>{props.children}</strong> {props.children}</Tooltip>

    return (
        <ListItem primaryText={this.props.children} leftIcon={<ContentInbox />} />
    );
  }
}

ElementListItem.defaultProps = {};

export default ElementListItem;
