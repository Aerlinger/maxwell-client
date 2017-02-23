'use strict'

import React from 'react'
import reactCSS from 'reactcss'
import {SketchPicker} from 'react-color'

import tinycolor from 'tinycolor2';

class ColorPickerButton extends React.Component {

  constructor(props) {
    super(props);

    let r;
    let g;
    let b;
    let a;

    if (props.color) {
      ({r, g, b, a} = tinycolor(props.color).toRgb());
    } else {

      r = props.r || '241';
      g = props.g || '112';
      b = props.b || '255';
      a = props.a || '1';
    }

    this.state = {
      displayColorPicker: false,
      color: {
        r: r,
        g: g,
        b: b,
        a: a
      }
    };
  }

  handleClick = () => {
    this.setState({displayColorPicker: !this.state.displayColorPicker})
  };

  handleClose = () => {
    this.setState({displayColorPicker: false})
  };

  handleChange = (color) => {
    let {r, g, b, a} = color.rgb;

    this.props.onChange(`rgba(${r},${g},${b},${a})`);

    this.setState({color: color.rgb})
  };

  render() {
    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer'
        },
        popover: {
          position: 'absolute',
          zIndex: '2'
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        }
      }
    });

    return (
        <div>
          <label>{this.props.label}</label>
          <div style={ styles.swatch } onClick={ this.handleClick }>
            <div style={ styles.color }/>
          </div>
          {
            this.state.displayColorPicker ? <div style={ styles.popover }>
                <div style={ styles.cover } onClick={ this.handleClose }/>


                <SketchPicker color={ this.state.color } onChange={ this.handleChange }/>
              </div> : null
          }

        </div>
    )
  }
}

export default ColorPickerButton
