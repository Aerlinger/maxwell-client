import React from 'react';

import Drawer from 'material-ui/Drawer';

import {Card, CardHeader, CardText} from 'material-ui/Card';
import ComponentButton from '../components/ComponentButton';

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
    sectionName: "Basic",
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
    sectionName: "Digital",
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


const ElementButtonGroup = (
    sectionName,
    expanded,
    buttonData
) => (
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

class ElementPane extends React.Component {
  render() {
    return (
        <Drawer width={200} open={true} docked={true}>
          {
            tilesData.map((item, i) => (
                ElementButtonGroup(item.sectionName, true, item.components)
            ))
          }
        </Drawer>
    );
  }
}

ElementPane.defaultProps = {};

export default ElementPane;
