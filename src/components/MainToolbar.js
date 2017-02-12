import React from 'react';
import Auth from '../modules/Auth';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

import MainToolbarStyle from '../styles/MainToolbar.css';
import ToolbarMenuItem from './ToolbarMenuItem';

import SignUpModal from './SignUpModal';
import FlashNotification from './FlashNotification'

class MainToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3
    };
  }

  handleChange(event, index, value) {
    this.setState({value});
  }

  render() {
    return (
        <Toolbar className={MainToolbarStyle.root}>
          <ToolbarGroup firstChild={true}>
            <ToolbarTitle text="Maxwell"/>

            <ToolbarMenuItem title="Circuit"/>
            <ToolbarMenuItem title="Edit"/>
            <ToolbarMenuItem title="Components"/>
            <ToolbarMenuItem title="Analysis"/>

            <SignUpModal/>
            <FlashNotification/>
          </ToolbarGroup>

          <ToolbarGroup>
            <FontIcon className="muidocs-icon-custom-sort"/>
            <ToolbarSeparator />

            {
              Auth.isUserAuthenticated() ? (
                      <FlatButton
                          href="/logout"
                          primary={true}
                          label="Logout"
                      />

                  ) : (
                      <div>
                        <FlatButton
                            href="/login"
                            primary={true}
                            label="Login"
                        />

                        <FlatButton
                            href="/signup"
                            primary={false}
                            label="Sign Up"
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
