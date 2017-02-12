import React, {PropTypes} from 'react';
import Auth from '../modules/Auth';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';

import MainToolbarStyle from '../styles/MainToolbar.css';

import ToolbarMenu from './ToolbarMenu';


class MainToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange(event, index, value) {
    this.setState({value});
  }

  render() {
    return (<Toolbar className={MainToolbarStyle.root}>
      <ToolbarGroup firstChild={true}>
        <ToolbarTitle text="Maxwell"/>

        <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)}>
          <MenuItem value={1} primaryText="All Broadcasts"/>
          <MenuItem value={2} primaryText="All Voice"/>
          <MenuItem value={3} primaryText="All Text"/>
          <MenuItem value={4} primaryText="Complete Voice"/>
          <MenuItem value={5} primaryText="Complete Text"/>
          <MenuItem value={6} primaryText="Active Voice"/>
          <MenuItem value={7} primaryText="Active Text"/>
        </DropDownMenu>

        <ToolbarMenu />

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
    </Toolbar>);
  }
}

export default MainToolbar;
