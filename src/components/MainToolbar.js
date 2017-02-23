import React from 'react';
import Auth from '../modules/Auth';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

import MainToolbarStyle from '../styles/MainToolbar.css';
import ToolbarMenuItem from './ToolbarMenuItem';
import Avatar from 'material-ui/Avatar';

import LoadCircuitModal from '../components/LoadCircuitModal';
import SignUpModal from '../components/SignUpModal';

import bjtImg from '../images/components/v1/bjt.png';

const style = {
  button: {
    margin: 12
  }
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

  testButtons() {
    return <div>
      <RaisedButton secondary={true} label='Save' onClick={this.props.saveCircuit}/>
      <RaisedButton
          secondary={true}
          label='Load'
          onClick={
            evt => this.setState({loadCircuitModalOpen: true})
          }
      />

      <RaisedButton
          secondary={true}
          label='Sign Up'
          onClick={
            evt => this.setState({signUpModalOpen: true})
          }
      />

      <RaisedButton secondary={true} label='dump' onClick={this.props.dump}/>
    </div>;
  }

  render() {
    let getCircuits = this.getCircuits.bind(this);

    return (
        <div>
          <LoadCircuitModal
              open={this.state.loadCircuitModalOpen}
              closeModal={
                evt => this.setState({loadCircuitModalOpen: false})
              }
          />

          <SignUpModal
              open={this.state.signUpModalOpen}
              closeModal={
                evt => this.setState({signUpModalOpen: false})
              }
          />

          <Toolbar className={MainToolbarStyle.root} style={{height: this.props.top}}>
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
              <ToolbarMenuItem title='Components'/>
              <ToolbarMenuItem title='Analysis'/>


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
                            style={style.button}
                        />

                    ) : (
                        <div>
                          <RaisedButton
                              href='/login'
                              primary={true}
                              label='Login'
                              style={style.button}
                          />

                          <RaisedButton
                              href='/signup'
                              secondary={true}
                              label='Sign Up'
                              style={style.button}
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
