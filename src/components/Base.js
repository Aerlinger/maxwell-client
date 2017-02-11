import React, {PropTypes} from 'react';
import Auth from '../modules/Auth';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';


const Base = ({children}) => (
    <div>
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <ToolbarTitle text="Maxwell"/>
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

      {children}
    </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
