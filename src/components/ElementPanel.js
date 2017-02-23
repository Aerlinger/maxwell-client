import React from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import ElementListItem from './ElementListItem';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import bjtImg from '../images/components/v1/bjt.png';

import {List, ListItem} from 'material-ui/List';

import SampleCircuits from './SampleCircuits';

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
    // padding: '4px 12px',
    position: 'relative',
    paddingLeft: 60
  }
};

const ElementButtonGroup = (group_name, group_components, expanded) => (

    <ListItem
        key={group_name}
        primaryText={group_name}
        initiallyOpen={expanded}
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
          group_components.map((component) => (
              <ElementListItem key={component.name} hotkey={component.hotkey}>
                {component.component_title}
              </ElementListItem>
          ))
        }/>

);

class ElementPanel extends React.Component {
  render() {

    return (
        <Paper className='element-panel' style={{
          borderRight: '2px solid #989797',
          display: 'block',
          position: 'absolute',
          width: '200px',
          left: 0,
          top: 50,
          bottom: 0
        }}>
          <Tabs style={{}}>
            <Tab label='Elements'>
              <List  >
                {
                  Object.keys(components).map((group_name) => (
                      ElementButtonGroup(group_name, components[group_name], group_name == 'Passive Analog'))
                  )
                }
              </List>
            </Tab>

            <Tab label='Presets'>
              <SampleCircuits />
            </Tab>
          </Tabs>

        </Paper>
    );
  }
}

export default ElementPanel;
