import React from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import ElementListItem from './ElementListItem';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import bjtImg from '../images/components/v1/bjt.png';

import ContentSend from 'material-ui/svg-icons/content/send';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import component_svg from '../images/components/svg/res_sub_Subsample.svg';

import SampleCircuitsList from './SampleCircuitsList';
import TransformerIcon from '../images/Transformer2.png';

// import SidePaneStyles from '../styles/SidePane.css';

let components = require("../modules/components.json");


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
              style={{background: "white", top: 12}}
              src={bjtImg}
              size={32}
          />
        }
        nestedItems={
          group_components.map((component, i) => (
              <ElementListItem key={component.name}>
                {component.component_title}
              </ElementListItem>
          ))
        }/>

);

class ElementPanel extends React.Component {
  render() {

    return (
        <Paper className="element-panel" style={{
          borderRight: '2px solid #989797',
          display: 'block',
          position: 'absolute',
          width: '200px',
          left: 0,
          top: 50,
          bottom: 0,
          overflowY: 'scroll'
        }}>
          <Tabs style={{}}>
            <Tab label='Elements'>
              <List  >
                {
                  Object.keys(components).map((group_name) => (
                      ElementButtonGroup(group_name, components[group_name], group_name == "Passive Analog"))
                  )
                }
              </List>
            </Tab>

            <Tab label='Presets'>
              <SampleCircuitsList />
            </Tab>
          </Tabs>

        </Paper>
    );
  }
}


ElementPanel.defaultProps = {};

export default ElementPanel;
