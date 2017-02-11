import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import Popover from 'material-ui/Popover';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class CircuitToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  render() {
    return (
        <Toolbar>
          <ToolbarGroup firstChild={true}>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Options"/>
            <FontIcon className="muidocs-icon-custom-sort"/>
            <ToolbarSeparator />
            <RaisedButton label="Create Broadcast" primary={true}/>
            <IconMenu
                iconButtonElement={
                  <IconButton touch={true}>
                    <NavigationExpandMoreIcon />
                  </IconButton>
                }
            >
              <MenuItem primaryText="Download"/>
              <MenuItem primaryText="More Info"/>
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
    );
  }
}

module.exports = CircuitToolbar;
