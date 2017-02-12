import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';


const style = {
  display: 'inline-block',
  float: 'left',
  margin: '16px 32px 16px 0',
};

class ToolbarMenuItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
        <div>
          <FlatButton
              onTouchTap={this.handleTouchTap}
              label={this.props.title}
          />
          <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose}
          >
            <Menu desktop={true} width={256}>
              <MenuItem primaryText="Bold" secondaryText="&#8984;B" />
              <MenuItem primaryText="Italic" secondaryText="&#8984;I" />
              <MenuItem primaryText="Underline" secondaryText="&#8984;U" />
              <MenuItem primaryText="Strikethrough" secondaryText="Alt+Shift+5" />
              <MenuItem primaryText="Superscript" secondaryText="&#8984;." />
              <MenuItem primaryText="Subscript" secondaryText="&#8984;," />
              <Divider />
              <MenuItem primaryText="Paragraph styles" rightIcon={<ArrowDropRight />} />
              <MenuItem primaryText="Align" rightIcon={<ArrowDropRight />} />
              <MenuItem primaryText="Line spacing" rightIcon={<ArrowDropRight />} />
              <MenuItem primaryText="Numbered list" rightIcon={<ArrowDropRight />} />
              <MenuItem primaryText="List options" rightIcon={<ArrowDropRight />} />
              <Divider />
              <MenuItem primaryText="Clear formatting" secondaryText="&#8984;/" />
              <Divider />
              <MenuItem
                  primaryText="Show"
                  rightIcon={<ArrowDropRight />}
                  menuItems={[
                    <MenuItem primaryText="Show Level 2" />,
                    <MenuItem primaryText="Grid lines" checked={true} />,
                    <MenuItem primaryText="Page breaks" insetChildren={true} />,
                    <MenuItem primaryText="Rules" checked={true} />,
                  ]}
              />
            </Menu>
          </Popover>
        </div>
    );
  }
}

module.exports = ToolbarMenuItem;
