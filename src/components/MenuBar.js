import React from 'react';
import Auth from '../modules/Auth';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

import MainToolbarStyle from '../styles/MainToolbar.css';
import ToolbarMenuItem from './ToolbarMenuItem';

import jQuery from 'jquery'


let menu = {
  main: {
    "New Circuit": {},
    "Save Circuit": {},
    "Share...": {},
    "Load Existing...": {},
    "Load From JSON": {},
    "Export to schematic...": {},
    "Export JSON": {},
    "Report a bug...": {}
  },
  edit: {
    "Undo": {},
    "Redo": {},
    "Cut": {},
    "Copy": {},
    "Paste": {},
    "Duplicate": {},
    "Select All": {},
  },
  run: {
    "run": {},
    "pause": {},
    "restart": {},
    "step_forward": {},
  },
  add_element: {
    "wire": {},
    "resistor": {},
    "ground": {},
    "voltagesource": {},
    "Paste": {},
    "Duplicate": {},
    "Select All": {},
    "Add probe at selected node": {},
    "Add probe at selected element": {},
  },
  options: {
    "Options...": {},
    "Advanced Options...": {},
  },
  circuits: {
  }
};

class MenuBar extends React.Component {
}

export default MenuBar;

