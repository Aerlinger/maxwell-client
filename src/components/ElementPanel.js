import React from 'react';

import Drawer from 'material-ui/Drawer';

import FontIcon from 'material-ui/FontIcon';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import ComponentButton from '../components/ComponentButton';
import Paper from 'material-ui/Paper';

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
    <Card expandable={true} initiallyExpanded={true} key={sectionName}>
      <CardHeader title={sectionName} actAsExpander={true} showExpandableButton={true}/>
      <CardText expandable={true} style={{padding: 5}}>
        <div style={styles.root}>
          {
            buttonData.map((button, i) => (
                <ComponentButton hotkey={button.hotkey} key={i}>
                  {button.title}
                </ComponentButton>
            ))
          }
        </div>
      </CardText>
    </Card>
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
              <ListGroup>
                <ListGroupItem bsStyle="info">Info</ListGroupItem>
                <ListGroupItem bsStyle="warning">Warning</ListGroupItem>
                <ListGroupItem bsStyle="danger">Danger</ListGroupItem>
              </ListGroup>

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

            </Tab>
          </Tabs>

        </Paper>
    );
  }
}

ElementPanel.defaultProps = {};

export default ElementPanel;
