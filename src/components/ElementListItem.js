require('normalize.css/normalize.css');

import React from 'react';
import {ListItem} from 'material-ui/List';

import bjtImg from '../images/components/v1/bjt.png';
import component_svg from '../images/components/svg/res_sub_Subsample.svg';
import Avatar from 'material-ui/Avatar';

import FontIcon from 'material-ui/FontIcon';
import {blue500, red500} from 'material-ui/styles/colors';

import TransformerIcon from '../images/Transformer2.png';

import ButtonStyle from '../styles/ComponentButton.css';

import SvgIcon from 'material-ui/SvgIcon';

const HomeIcon = (props) => (
    <SvgIcon {...props}>
      {component_svg}
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
    // backgroundColor: '#333',
    fontSize: '11px',
    margin: 0,
    padding: '8px 8px 8px 36px'
  },
  iconStyles: {
    margin: 6,
    top: -3,
    left: 0
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
                  innerDivStyle={style.innerDiv}
                  leftAvatar={
                    <Avatar
                        style={{background: "none", borderRadius: 0, top: 5, left: 5}}
                        src={bjtImg} size={20}/>
                  }

        />
    );
  }
}

ElementListItem.defaultProps = {};

export default ElementListItem;
