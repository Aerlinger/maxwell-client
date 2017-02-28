import React from 'react';
import Auth from '../modules/Auth';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

import MainToolbarStyle from '../styles/MainToolbar.css';

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
    "Embed...": {},
    "Report a bug...": {},
    "Options...": {},
    "Advanced Options...": {},
    "About": {}
  },
  edit: {
    "Undo": {},
    "Redo": {},
    "Cut": {},
    "Copy": {},
    "Paste": {},
    "Duplicate": {},
    "Select All": {},
    "Zoom in": {},
    "Zoom out": {},
  },
  run: {
    "run": {},
    "pause": {},
    "restart": {},
    "step_forward": {},
    "step_backward": {},
    "run to time...": {}
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

  },
  circuits: {
    "community circuits": {}
  },
  help: {
    "keymap": {}
  }
};

class MenuBar extends React.Component {
}

export default MenuBar;

