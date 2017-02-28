import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

import LoadCircuitModal from '../modals/LoadCircuitModal';
import ExportJsonModal from '../modals/ExportJsonModal';

class CircuitMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      loadCircuitModalOpen: false,
      exportJsonModalOpen: false
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

  openExportJsonModal() {
    this.setState({
      open: false,
      exportJsonModalOpen: true
    })
  }

  closeExportJsonModal() {
    this.setState({
      exportJsonModalOpen: false
    })
  }

  closeLoadCircuitModal() {
    this.setState({
      loadCircuitModalOpen: false
    })
  }

  openLoadCircuitModal() {
    this.setState({
      open: false,
      loadCircuitModalOpen: true
    })
  }

  render() {
    let openLoadCircuitModal = this.openLoadCircuitModal.bind(this);
    let closeLoadCircuitModal = this.closeLoadCircuitModal.bind(this);

    let openJsonExportModal = this.openExportJsonModal.bind(this);
    let closeJsonExportModal = this.closeExportJsonModal.bind(this);

    console.log("STATE", this.state);

    return (
        <div>
          <LoadCircuitModal
              open={this.state.loadCircuitModalOpen}
              closeModal={closeLoadCircuitModal}
          />

          <ExportJsonModal
              open={this.state.exportJsonModalOpen}
              closeModal={closeJsonExportModal}
              circuit={this.props.circuit}
          />

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
              <MenuItem primaryText="New Circuit" secondaryText="&#8984;N"/>
              <MenuItem primaryText="Save Circuit" secondaryText="&#8984;S"/>
              <MenuItem primaryText="Load Circuit..." onClick={openLoadCircuitModal} secondaryText="&#8984;O"/>

              <Divider />
              <MenuItem primaryText="Import Circuit..." secondaryText="&#8984;I"/>
              <MenuItem primaryText="Export Circuit..."
                        rightIcon={<ArrowDropRight />}
                        menuItems={[
                          <MenuItem primaryText="Embeddable link"/>,
                          <MenuItem primaryText="Circuit JSON..." onClick={openJsonExportModal}/>,
                          <MenuItem primaryText="Schematic Diagram..."/>
                        ]}

              />
              <Divider />

              <MenuItem primaryText="Options..." secondaryText="&#8984;,"/>
              <Divider />
              <MenuItem primaryText="About..."/>
            </Menu>
          </Popover>
        </div>
    );
  }
}

module.exports = CircuitMenu;
