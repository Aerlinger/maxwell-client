import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import bjtImg from '../images/components/v1/bjt.png';
import ElementListItem from './ElementListItem';
import components from '../modules/components.json';


const styles = {
  nestedList: {
    borderLeft: '5px solid #555',
    backgroundColor: '#444',
    borderBottom: '1px solid #970000'
  },
  rootList: {
    borderBottom: '1px solid black',
    fontSize: '12px',
    fontWeight: 'bold',
    position: 'relative',
    paddingLeft: 60
  }
};

class ElementList extends React.Component {
  render() {
    let placeElement = this.props.placeElement;

    return <List>
      {
        Object.keys(components).map((group_name) => {
          return <ListItem
              key={group_name}
              primaryText={group_name}
              initiallyOpen={group_name == 'Passive Analog'}
              innerDivStyle={styles.rootList}
              nestedListStyle={styles.nestedList}
              primaryTogglesNestedList={true}
              leftAvatar={
                <Avatar
                    style={{background: 'white', top: 12}}
                    src={bjtImg}
                    size={32}
                />
              }
              nestedItems={
                components[group_name].map((component) => (
                    <ElementListItem
                        placeElement={placeElement}
                        setPlaceElement={this.props.setPlaceElement}
                        name={component.name}
                        key={component.name}
                        hotkey={component.hotkey}>
                      {
                        component.component_title
                      }
                    </ElementListItem>
                ))
              }/>
        })
      }
    </List>

  }
}

export default ElementList;
