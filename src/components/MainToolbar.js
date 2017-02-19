import React from 'react';
import Auth from '../modules/Auth';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

import MainToolbarStyle from '../styles/MainToolbar.css';
import ToolbarMenuItem from './ToolbarMenuItem';
import Avatar from 'material-ui/Avatar';
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
      value: 3
    };
  }

  saveCircuit() {
    let data = {
      'params': {
        'type': 'default',
        'timeStep': 0.000005,
        'simSpeed': 172,
        'currentSpeed': 50,
        'voltageRange': 5,
        'powerRange': 50,
        'flags': 1
      },
      'components': [
        {
          'name': 'ResistorElm',
          'pos': [304, 176, 304, 304],
          'flags': 0,
          'params': {
            'resistance': 100
          }
        },
        {
          'name': 'VarRailElm',
          'pos': [304, 176, 304, 128],
          'flags': 0,
          'params': {
            'waveform': 6,
            'frequency': 5,
            'maxVoltage': 5,
            'bias': 0,
            'phaseShift': 0,
            'dutyCycle': 0.5,
            'sliderText': 'Voltage'
          }
        },
        {
          'name': 'GroundElm',
          'pos': [304, 304, 304, 352],
          'flags': 0,
          'params': {}
        }
      ]
    };

    const xhr = new XMLHttpRequest();
    xhr.open('post', '/api/circuit');

    xhr.setRequestHeader('Content-type', 'application/json');

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

    xhr.send(JSON.stringify(data));
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

  render() {
    let saveCircuit = this.saveCircuit.bind(this);
    let getCircuits = this.getCircuits.bind(this);

    return (
        <Toolbar className={MainToolbarStyle.root} style={{height: 50}}>
          <ToolbarGroup firstChild={true}>
            <Avatar
                style={{background: 'white', top: 12, marginLeft: 15}}
                src={bjtImg}
                size={32}
            />

            <ToolbarTitle text='Maxwell' style={{color: 'white', marginLeft: 30}}>
            </ToolbarTitle>

            <ToolbarMenuItem title='Circuit'/>
            <ToolbarMenuItem title='Edit'/>
            <ToolbarMenuItem title='Components'/>
            <ToolbarMenuItem title='Analysis'/>

            <ToolbarMenuItem title='Create' onClick={saveCircuit}/>
            <ToolbarMenuItem title='Get' onClick={getCircuits}/>

            {/*<SignUpModal/>*/}
            {/*<FlashNotification/>*/}
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
    );
  }
}

export default MainToolbar;
