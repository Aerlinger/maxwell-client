import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

class ToolbarMenuItem extends React.Component {

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
              <MenuItem primaryText="Bold" secondaryText="&#8984;B"/>
              <MenuItem primaryText="Italic" secondaryText="&#8984;I"/>
              <MenuItem primaryText="Underline" secondaryText="&#8984;U"/>
              <MenuItem primaryText="Strikethrough" secondaryText="Alt+Shift+5"/>
              <MenuItem primaryText="Superscript" secondaryText="&#8984;."/>
              <MenuItem primaryText="Subscript" secondaryText="&#8984;,"/>
              <Divider />
              <MenuItem primaryText="Paragraph styles" rightIcon={<ArrowDropRight />}/>
              <MenuItem primaryText="Align" rightIcon={<ArrowDropRight />}/>
              <MenuItem primaryText="Line spacing" rightIcon={<ArrowDropRight />}/>
              <MenuItem primaryText="Numbered list" rightIcon={<ArrowDropRight />}/>
              <MenuItem primaryText="List options" rightIcon={<ArrowDropRight />}/>
              <Divider />
              <MenuItem primaryText="Clear formatting" secondaryText="&#8984;/"/>
              <Divider />
              <MenuItem
                  primaryText="Show"
                  rightIcon={<ArrowDropRight />}
                  menuItems={[
                    <MenuItem primaryText="Show Level 2"/>,
                    <MenuItem primaryText="Grid lines" checked={true}/>,
                    <MenuItem primaryText="Page breaks" insetChildren={true}/>,
                    <MenuItem primaryText="Rules" checked={true}/>
                  ]}
              />
            </Menu>
          </Popover>
        </div>
    );
  }
}

module.exports = ToolbarMenuItem;
