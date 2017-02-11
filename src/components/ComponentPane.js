import React from 'react';

import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import ComponentButton from '../components/ComponentButton'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 900,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'images/yeoman.png',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/yeoman.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

class ElementPane extends React.Component {
  render() {
    return (
      <Drawer width={150} open={true} docked={true}>
        <div style={styles.root}>
          <Subheader>December</Subheader>
          {tilesData.map((tile, i) => (

            <ComponentButton hotkey="W" key={i}>
              Transformer
            </ComponentButton>
          ))}
        </div>
      </Drawer>
    );
  }
}

ElementPane.defaultProps = {};

export default ElementPane;
