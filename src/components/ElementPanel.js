import React from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import ElementListItem from './ElementListItem';
import Paper from 'material-ui/Paper';

import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

// import SidePaneStyles from '../styles/SidePane.css';
import Maxwell from 'maxwell';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 500,
    height: 900,
    overflowY: 'auto'
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  listItem: {
    // fontSize: '12px',
    backgroundColor: '#333'
    // paddingBottom: '5px',
    // paddingTop: '5px'
  },
  innerDivListItem: {

  },
  leftIcon: {
    margin: 2
  },
  tabs: {
    marginTop: 10
  }
};

const tilesData = [
  {
    sectionName: 'Basic',
    expanded: true,
    components: [
      {
        img: 'images/yeoman.png',
        title: 'Transformer',
        hotkey: 'T'
      },
      {
        img: 'images/yeoman.png',
        title: 'Resistor',
        hotkey: 'R'
      },
      {
        img: 'images/yeoman.png',
        title: 'Wire',
        hotkey: 'W'
      }
    ]
  },
  {
    sectionName: 'Digital',
    expanded: true,
    components: [
      {
        img: 'images/yeoman.png',
        title: 'Transformer',
        hotkey: 'T'
      },
      {
        img: 'images/yeoman.png',
        title: 'Resistor',
        hotkey: 'R'
      },
      {
        img: 'images/yeoman.png',
        title: 'Wire',
        hotkey: 'W'
      }
    ]
  }
];


const ElementButtonGroup = (sectionName,
                            expanded,
                            buttonData) => (

    <List key={sectionName}
          style={{backgroundColor: '#555'}}
    >

      <ListItem
          primaryText='Component'
          leftIcon={<ContentSend style={{}}/>}
          initiallyOpen={true}
          style={styles.listItem}
          innerDivStyle={styles.innerDivListItem}
          nestedItems={
            buttonData.map((button, i) => (
                <ElementListItem key={i}>
                  {button.title}
                </ElementListItem>
            ))
          }/>
    </List>
);

class ElementPanel extends React.Component {
  render() {
    return (
        <Paper style={{borderRight: '2px solid #989797', display: 'block', position: 'absolute', width: '200px', left: 0, top: 50, bottom: 0}}>
          <Tabs style={{}}>
            <Tab
                label='Elements'
            >

              {
                tilesData.map((item) => (
                    ElementButtonGroup(item.sectionName, true, item.components)
                ))
              }
            </Tab>

            <Tab
                label='Circuits'
            >

              <List>
                <Subheader>Nested List Items</Subheader>
                <ListItem primaryText='Sent mail' leftIcon={<ContentSend />} style={{fontSize: '12px'}}/>
                <ListItem primaryText='Drafts' leftIcon={<ContentDrafts />}/>
                <ListItem
                    primaryText='Inbox'
                    leftIcon={<ContentInbox />}
                    initiallyOpen={true}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                      <ListItem
                          key={1}
                          primaryText='Starred'
                          leftIcon={<ActionGrade />}
                      />,
                      <ListItem
                          key={2}
                          primaryText='Sent Mail'
                          leftIcon={<ContentSend />}
                          disabled={true}
                          initiallyOpen={true}
                          nestedItems={[
                            <ListItem key={1} primaryText='Drafts' leftIcon={<ContentDrafts />}/>
                          ]}
                      />,
                      <ListItem
                          key={3}
                          primaryText='Inbox'
                          leftIcon={<ContentInbox />}
                          initiallyOpen={true}
                          nestedItems={[
                            <ListItem key={1} primaryText='Drafts' leftIcon={<ContentDrafts />}/>
                          ]}
                      />
                    ]}
                />
              </List>

            </Tab>
          </Tabs>

        </Paper>
    );
  }
}

ElementPanel.defaultProps = {};

export default ElementPanel;
