import React from 'react';

import Drawer from 'material-ui/Drawer';

import FontIcon from 'material-ui/FontIcon';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import ComponentButton from '../components/ComponentButton';

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
        <Drawer width={200} open={true} docked={true}>
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

            </Tab>
          </Tabs>

        </Drawer>
    );
  }
}

ElementPanel.defaultProps = {};

export default ElementPanel;
