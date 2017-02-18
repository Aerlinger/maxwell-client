require('normalize.css/normalize.css');

import React from 'react';
import {ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

import ButtonStyle from '../styles/ComponentButton.css';

class ElementListItem extends React.Component {
  hotkey() {
    if (this.props.hotkey) {
      return <span className={ButtonStyle.hotkey}>{this.props.hotkey}</span>
    }
  }

  render() {
    return (
        <ListItem primaryText={this.props.children} leftIcon={<ContentInbox />} />
    );
  }
}

ElementListItem.defaultProps = {};

export default ElementListItem;
