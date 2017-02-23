import React from 'react';

import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
let componentImg = require('../images/components/v1/bjt.png');

let sampleCircuits = [
  {
    title: 'Circuit title',
    createdAt: new Date('2017-02-19 01:35:48.261Z'),
    updatedAt: new Date('2017-02-19 01:35:48.261Z'),
    description: 'Circuit description Circuit description Circuit description Circuit description Circuit descriptionCircuit description Circuit descriptionCircuit description Circuit description',
    thumbnail: componentImg
  },
  {
    title: 'Circuit title 2',
    description: 'Circuit description 2',
    createdAt: new Date('2017-02-19 01:35:48.261Z'),
    updatedAt: new Date('2017-02-19 01:35:48.261Z'),
    thumbnail: componentImg
  },
  {
    title: 'Circuit title 3',
    description: 'Circuit description 3',
    createdAt: new Date('2017-02-19 01:35:48.261Z'),
    updatedAt: new Date('2017-02-19 01:35:48.261Z'),
    thumbnail: componentImg
  },
];

let loadCircuitListItem = function ({
    title,
    description,
    createdAt,
    updatedAt,
    thumbnail
}) {
  return <div>
    <ListItem
        key={title}
        primaryText={title}
        leftAvatar={<Avatar src={componentImg}/>}
        rightAvatar={
          <small style={{fontSize: 11, color: "#777", fontStyle: "italic"}}>
            Updated: {createdAt.toDateString()}
          </small>
        }
        secondaryText={
          <p>
            {description}
          </p>
        }
    >
    </ListItem>
    <Divider />
  </div>;
};

class LoadCircuitModal extends React.Component {
  handleOpen = () => {
    // this.setState({open: true});
  };

  handleClose = () => {
    // this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
          label='Cancel'
          primary={false}
          onTouchTap={this.props.closeModal}
      />,
      <FlatButton
          label='Load'
          primary={false}
          keyboardFocused={true}
          onTouchTap={this.props.closeModal}
      />
    ];

    return (
        <div>
          <Dialog
              title='Sign Up'
              actions={actions}
              modal={false}
              open={this.props.open}
              onRequestClose={this.props.closeModal}
              contentStyle={{'padding': 0}}
              style={{'padding': 0}}
              bodyStyle={{'padding': 0}}
              autoScrollBodyContent={true}
          >

            <List>

              {
                sampleCircuits.map(sampleCircuit => loadCircuitListItem(sampleCircuit))
              }

            </List>

          </Dialog>
        </div>
    );
  }
}

export default LoadCircuitModal;
