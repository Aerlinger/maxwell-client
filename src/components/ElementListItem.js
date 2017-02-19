require('normalize.css/normalize.css');

import React from 'react';
import {ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

import FontIcon from 'material-ui/FontIcon';
import {blue500, red500} from 'material-ui/styles/colors';

import ButtonStyle from '../styles/ComponentButton.css';

import SvgIcon from 'material-ui/SvgIcon';

const HomeIcon = (props) => (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
);

let style = {
  listItem: {
    fontSize: '12px',
    backgroundColor: '#333',
    padding: 0,
    margin: 0
  },
  innerDiv: {
    paddingLeft: 48
  },
  nestedListStyle: {

  },
  iconStyles: {
    margin: 6,
    top: 5
  }
};

class ElementListItem extends React.Component {
  hotkey() {
    if (this.props.hotkey) {
      return <span className={ButtonStyle.hotkey}>{this.props.hotkey}</span>
    }
  }

  render() {
    return (
        <ListItem primaryText={this.props.children}
                  style={style.listItem}
                  innerDivStyle={style.innerDiv}
                  leftIcon={
          <HomeIcon style={style.iconStyles} />
        } />
    );
  }
}

ElementListItem.defaultProps = {};

export default ElementListItem;
