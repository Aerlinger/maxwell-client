import 'normalize.css/normalize.css';

import React from 'react';
import {ListItem} from 'material-ui/List';

import bjtImg from '../images/components/v1/bjt.png';
import Avatar from 'material-ui/Avatar';


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
      return (
          <Avatar
              color='rgba(255, 255, 255, 0.6)'
              backgroundColor='rgba(255, 255, 255, 0.2)'
              style={{
                fontSize: 11,
                borderRadius: '10%',
                textTransform: 'uppercase'
              }}
              size={16}
          >
            {this.props.hotkey}
          </Avatar>
      );
    }
  }

  render() {
    let hotkey = this.hotkey.bind(this);

    let elmStyle = {};
    let prefix = "";
    if (this.props.placeElement == this.props.name) {
      elmStyle = {
        fontSize: '11px',
        fontWeight: 'bold',
        margin: 0,
        background: 'rgba(0, 193, 28, 0.23)',
        padding: '8px 8px 8px 36px'
      };
      prefix = "> ";
    } else {
      elmStyle = {
        fontSize: '11px',
        margin: 0,
        padding: '8px 8px 8px 36px'
      };
    }

    return (
        <ListItem primaryText={
          prefix + this.props.children
        }
                  innerDivStyle={elmStyle}
                  leftAvatar={
                    <Avatar
                        style={{
                          background: 'none',
                          borderRadius: 0, top: 5, left: 5
                        }}
                        src={bjtImg}
                        size={20}/>
                  }
                  rightAvatar={
                    hotkey()
                  }

        />
    );
  }
}

export default ElementListItem;
