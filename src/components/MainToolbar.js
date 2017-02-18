import React from 'react';
import Auth from '../modules/Auth';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

import MainToolbarStyle from '../styles/MainToolbar.css';
import ToolbarMenuItem from './ToolbarMenuItem';

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

  render() {
    return (
        <Toolbar className={MainToolbarStyle.root} style={{height: 50}}>
          <ToolbarGroup firstChild={true}>
            <ToolbarTitle text="Maxwell"/>

            <ToolbarMenuItem title="Circuit"/>
            <ToolbarMenuItem title="Edit"/>
            <ToolbarMenuItem title="Components"/>
            <ToolbarMenuItem title="Analysis"/>

            {/*<SignUpModal/>*/}
            {/*<FlashNotification/>*/}
          </ToolbarGroup>

          <ToolbarGroup>
            <FontIcon className="muidocs-icon-custom-sort"/>
            <ToolbarSeparator />

            {
              Auth.isUserAuthenticated() ? (
                      <RaisedButton
                          href="/logout"
                          primary={true}
                          label="Logout"
                          style={style.button}
                      />

                  ) : (
                      <div>
                        <RaisedButton
                            href="/login"
                            primary={true}
                            label="Login"
                            style={style.button}
                        />

                        <RaisedButton
                            href="/signup"
                            secondary={true}
                            label="Sign Up"
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
