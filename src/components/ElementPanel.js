import React from 'react';

import Drawer from 'material-ui/Drawer';

import FontIcon from 'material-ui/FontIcon';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import ComponentButton from '../components/ComponentButton';
import Paper from 'material-ui/Paper';

import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

// import SidePaneStyles from '../styles/SidePane.css';

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

    <List>

      <ListItem
          primaryText="Sent mail"
          leftIcon={<ContentSend />}
          nestedItems={
            buttonData.map((button, i) => (
                <ComponentButton hotkey={button.hotkey} key={i}>
                  {button.title}
                </ComponentButton>
            ))
          }/>
    </List>
);

class ElementPanel extends React.Component {
  render() {
    return (
        <Paper style={{display: "block", position: "absolute", width: "200px", left: 0, top: 56, bottom: 0}}>
          <Tabs>
            <Tab
                icon={<FontIcon className="material-icons">phone</FontIcon>}
                label="Elements"
            >

              {
                tilesData.map((item) => (
                    ElementButtonGroup(item.sectionName, true, item.components)
                ))
              }
            </Tab>

            <Tab
                icon={<FontIcon className="material-icons">phone</FontIcon>}
                label="Circuits"
            >

              <List>
                <Subheader>Nested List Items</Subheader>
                <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                <ListItem
                    primaryText="Inbox"
                    leftIcon={<ContentInbox />}
                    initiallyOpen={true}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                      <ListItem
                          key={1}
                          primaryText="Starred"
                          leftIcon={<ActionGrade />}
                      />,
                      <ListItem
                          key={2}
                          primaryText="Sent Mail"
                          leftIcon={<ContentSend />}
                          disabled={true}
                          nestedItems={[
                            <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                          ]}
                      />,
                      <ListItem
                          key={3}
                          primaryText="Inbox"
                          leftIcon={<ContentInbox />}
                          nestedItems={[
                            <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                          ]}
                      />,
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
