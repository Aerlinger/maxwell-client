import {
  cyan700,
  grey600,
  indigoA700,
  greenA700,
  green900,
  redA700,
  blueGrey900,
  orange900,
  lightBlue50,
  purpleA700,
  fullWhite
} from 'material-ui/styles/colors'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import spacing from 'material-ui/styles/spacing';
import {darken, fade, emphasize, lighten} from 'material-ui/utils/colorManipulator';

let baseTheme = {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#970000',
    primary2Color: cyan700,
    primary3Color: grey600,
    accent1Color: '#ff0000',
    accent2Color: '#000',
    accent3Color: '#ff00fe',
    textColor: fullWhite,
    secondaryTextColor: fade(fullWhite, 0.7),
    alternateTextColor: '#FFF',
    // alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12)
  }
};

let overrides = {
  toolbar: {
    color: fade('#FF00FE', 0.54),
    height: 100,
    titleFontSize: 40
  },
  button: {
    height: 56
  },
  flatButton: {
    color: 'blue'
  },
  raisedButton: {
    color: 'pink',
    textColor: 'green',
    primaryColor: 'blue',
    primaryTextColor: 'brown',
    secondaryColor: 'yellow',
    secondaryTextColor: 'orange'
  },
  tableRow: {
    hoverColor: baseTheme.palette.accent2Color,
    stripeColor: fade(lighten(blueGrey900, 0.5), 0.8)
  },
  textField: {
    errorColor: indigoA700,
    borderColor: purpleA700,
    focusColor: cyan700,
    floatingLabelColor: purpleA700,
    textColor: lightBlue50
  },
  tabs: {
    backgroundColor: 'orange',
    textColor: fade(indigoA700, 0.7),
    selectedTextColor: '#F89999'
  },
  inkBar: {
    backgroundColor: '#0F0',
  },
};

/**
 * Theme Reference: https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js
 */
export default getMuiTheme(baseTheme, overrides);
