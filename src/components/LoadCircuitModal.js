import React from 'react';

import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Auth from '../modules/Auth';

import componentImg from '../images/components/v1/bjt.png';



let loadCircuitListItem = function ({
    name,
    description,
    createdAt,
    updatedAt,
    thumbnail
}) {
  return <div key={name + createdAt}>
    <ListItem
        primaryText={name}
        leftAvatar={<Avatar src={componentImg}/>}
        rightAvatar={
          <small style={{fontSize: 11, color: '#777', fontStyle: 'italic'}}>
            Updated: {new Date(createdAt).toDateString()}
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
  constructor(props) {
    super(props);

    this.state = {
      circuits: []
    }
  }

  handleOpen = () => {
    // this.setState({open: true});
  };

  handleClose = () => {
    // this.setState({open: false});
  };

  componentDidMount() {
    const xhr = new XMLHttpRequest();

    xhr.open('get', '/api/circuits');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          circuits: xhr.response
        });
      }
    });

    xhr.send();
  }

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
              title='Load circuit'
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
                this.state.circuits.map(circuit => loadCircuitListItem(circuit))
              }

            </List>

          </Dialog>
        </div>
    );
  }
}

export default LoadCircuitModal;
