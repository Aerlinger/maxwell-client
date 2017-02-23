import React from 'react';
import Auth from '../modules/Auth';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {fullWhite} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Chip from 'material-ui/Chip';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';

import ToolbarMenuItem from './ToolbarMenuItem';
import Avatar from 'material-ui/Avatar';

import LoadCircuitModal from '../components/LoadCircuitModal';
import SignUpModal from '../components/SignUpModal';
import bjtImg from '../images/components/v1/bjt.png';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  chip: {
    margin: 0,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class MainToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadCircuitModalOpen: false,
      signInModalOpen: false,
      signUpModalOpen: false
    };
  }

  getCircuits() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/circuits');

    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';

    xhr.addEventListener('load', () => {
      if (xhr.status === 200 || xhr.status === 201) {
        console.log(xhr.response);
      } else {
        console.log('Err', xhr.response);
      }
    });

    xhr.send();
  }

  chip() {
    return <Chip
        backgroundColor={blue300}
        onRequestDelete={this.handleRequestDelete}
        onTouchTap={this.handleTouchTap}
        style={styles.chip}
    >
      <Avatar size={24} color={blue300} backgroundColor={indigo900}>
        MB
      </Avatar>
      Colored Chip
    </Chip>
  }

  testButtons() {
    return <div>
      <RaisedButton label='Default' onClick={() => this.setState({loadCircuitModalOpen: true})}/>
      <RaisedButton primary={true} label='Primary' onClick={this.props.saveCircuit}/>
      <RaisedButton secondary={true} label='Secondary' onClick={() => this.setState({signUpModalOpen: true})}/>
      <RaisedButton disabled={true} label='Disabled' onClick={this.props.dump}/>

      <FlatButton label='Default' onClick={() => this.setState({loadCircuitModalOpen: true})}/>
      <FlatButton primary={true} label='Primary' onClick={this.props.saveCircuit}/>
      <FlatButton secondary={true} label='Secondary' onClick={() => this.setState({signUpModalOpen: true})}/>
      <FlatButton disabled={true} label='Disabled' onClick={this.props.dump}/>

      <FlatButton icon={<ActionAndroid />}/>
      <FlatButton backgroundColor="#a4c639" hoverColor="#8AA62F" icon={<ActionAndroid color={fullWhite}/>}/>

      <IconButton tooltip="bottom-center" touch={true} tooltipPosition="bottom-center">
        <ActionGrade />
      </IconButton>
    </div>
  }

  handleRequestDelete() {
    alert('You clicked the delete button.');
  }

  handleTouchTap() {
    alert('You clicked the Chip.');
  }

  render() {
    return (
        <div>
          <LoadCircuitModal
              open={this.state.loadCircuitModalOpen}
              closeModal={
                () => this.setState({loadCircuitModalOpen: false})
              }
          />

          <SignUpModal
              open={this.state.signUpModalOpen}
              closeModal={
                () => this.setState({signUpModalOpen: false})
              }
          />

          <Toolbar style={{height: this.props.top, borderBottom: '1px solid red'}}>
            <ToolbarGroup firstChild={true}>
              <Avatar
                  style={{background: 'white', top: 12, marginLeft: 15}}
                  src={bjtImg}
                  size={32}
              />

              <ToolbarTitle text='Maxwell' style={
                {color: 'white', marginLeft: 30, fontFamily: 'Courier New'}
              }>
              </ToolbarTitle>

              <ToolbarSeparator />

              <ToolbarMenuItem title='Circuit'/>
              <ToolbarMenuItem title='Edit'/>

              {this.testButtons()}
            </ToolbarGroup>


            <ToolbarGroup>
              <FontIcon className='muidocs-icon-custom-sort'/>
              <ToolbarSeparator />

              {
                Auth.isUserAuthenticated() ? (
                        <RaisedButton
                            href='/logout'
                            primary={true}
                            label='Logout'
                        />

                    ) : (
                        <div>
                          <RaisedButton
                              href='/login'
                              primary={true}
                              label='Login'
                          />

                          <RaisedButton
                              href='/signup'
                              secondary={true}
                              label='Sign Up'
                          />
                        </div>
                    )
              }

            </ToolbarGroup>
          </Toolbar>
        </div>
    );
  }
}

export default MainToolbar;
