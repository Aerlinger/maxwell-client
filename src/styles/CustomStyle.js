import {
  cyan50,
  cyan700,
  grey500,
  grey600,
  grey900,
  indigo50,
  indigo200,
  indigoA700,
  greenA700,
  green500,
  green800,
  green900,
  lightGreenA700,
  red500,
  redA700,
  red900,
  blueGrey900,
  lightBlue200,
  blue900,
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
    alternateTextColor: fullWhite,
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
    titleFontSize: 20
  },
  raisedButton: {
    color: '#F00',
    textColor: fullWhite,
    primaryColor: green500,
    primaryTextColor: fullWhite,
    secondaryColor: red900,
    secondaryTextColor: fullWhite,
    disabledTextColor: grey500
  },
  flatButton: {
    textColor: fullWhite,
    primaryTextColor: lightGreenA700,
    secondaryTextColor: red500
  },
  tableRow: {
    hoverColor: baseTheme.palette.accent2Color,
    stripeColor: 'rgba(146, 152, 155, 0.09)'
  },
  textField: {
    errorColor: indigoA700,
    borderColor: lightBlue50,
    focusColor: cyan50,
    floatingLabelColor: lightBlue50,
    textColor: lightBlue50
  },
  tabs: {
    backgroundColor: 'rgb(0, 158, 24)',
    textColor: fade(fullWhite, 0.9),
    selectedTextColor: fullWhite
  },
  inkBar: {
    backgroundColor: '#0F0',
  },
};

/**
 * Theme Reference: https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js
 */
export default getMuiTheme(baseTheme, overrides);
