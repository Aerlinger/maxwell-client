import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-drop-down';

class RunMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
        <div>
          <div className='button-wrapper'>
            <FlatButton
                onTouchTap={this.handleTouchTap}
                onClick={this.props.onClick}
                label={this.props.title}
                labelStyle={{
                  textTransform: 'capitalize',
                  fontSize: 'bold'
                }}
                style={{
                  //borderBottom: '2px solid red'
                }}
                labelPosition="before"
                icon={
                  <ArrowDown
                      style={{
                        opacity: 0.5
                      }}
                  />
                }
            />
          </div>
          <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose}
          >
            <Menu desktop={true} width={256}>
              <MenuItem primaryText="Run" secondaryText="Space"/>
              <MenuItem primaryText="Pause" />
              <MenuItem primaryText="Reset" />
              <Divider />
              <MenuItem primaryText="Step Forward" secondaryText="]"/>
              <MenuItem primaryText="Step Backward" secondaryText="["/>
              <Divider />
              <MenuItem primaryText="Run to time..." secondaryText="&#8984;R"/>
            </Menu>
          </Popover>
        </div>
    );
  }
}

module.exports = RunMenu;
