import React from 'react';
import {Link} from 'react-router'

import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Auth from '../../modules/Auth';

class LoadCircuitModal extends React.Component {
  loadCircuitListItem({
      name,
      _id,
      description,
      createdAt,
      updatedAt,
      thumbnail = 'https://placehold.it/300x200'
  } = {}) {
    return <div key={name + createdAt}>
      <Link key={name} to={`/circuit/${_id}`} onClick={this.props.closeModal}>
        <ListItem
            primaryText={
              name
            }
            leftAvatar={
              <Avatar src={thumbnail}
                      size={40}
                      style={{borderRadius: 0}}
              />
            }
            rightAvatar={
              <div>
                <small style={{fontSize: 11, color: '#777', fontStyle: 'italic'}}>
                  Created: {new Date(createdAt).toDateString()}
                </small>
                <br />
                <small style={{fontSize: 11, color: '#777', fontStyle: 'italic'}}>
                  Updated: {new Date(updatedAt).toDateString()}
                </small>
              </div>
            }
            secondaryText={
              <p>{description}</p>
            }
        >
        </ListItem>
      </Link>
      <Divider />
    </div>;
  }

  constructor(props) {
    super(props);

    this.state = {
      circuits: []
    }
  }

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
          secondary={true}
          onTouchTap={this.props.closeModal}
      />
    ];

    return (
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
              this.state.circuits.map(circuit => this.loadCircuitListItem(circuit))
            }

          </List>

        </Dialog>
    );
  }
}

export default LoadCircuitModal;
