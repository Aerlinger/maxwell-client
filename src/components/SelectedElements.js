import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

import bjtImg from '../images/components/v1/bjt.png';

let style = {
  innerDiv: {
    // backgroundColor: '#333',
    fontSize: '14px',
    margin: 0,
    padding: '8px 8px 8px 48px'
  },
  iconStyles: {
    margin: 6,
    top: -3,
    left: 0
  }
};

let selectedElement = (element) => {
  let name = element.constructor.name;

  return (<div>
    <ListItem primaryText={name}
              innerDivStyle={style.innerDiv}
              leftAvatar={
                <Avatar
                    style={{background: 'none', borderRadius: 0, top: 6, left: 18}}
                    src={bjtImg}
                    size={20}/>
              }

    />
    <Divider />
  </div>)
};

class SelectedElements extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <List>

          <ListItem
              primaryText={`${this.props.selectedElements.length} selected components`}
          >

          </ListItem>
          <Divider />

          {
            this.props.selectedElements.map((element) => selectedElement(element))
          }

        </List>
    );
  }
}

export default SelectedElements;
