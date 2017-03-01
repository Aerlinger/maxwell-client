import React from 'react';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Slider from 'material-ui/Slider';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import {CardText} from 'material-ui/Card';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {blueGrey900} from 'material-ui/styles/colors';

import componentImg from '../images/components/v1/bjt.png';

import SelectInput from './inputs/SelectInput';
import NumberField from './inputs/NumberField';


let styles = {
  input: {
    // marginLeft: 16,
    // marginRight: 16,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 0,
    height: 67
  },
  cardText: {
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    position: 'absolute',
    right: 0,
    left: 0,
    paddingBottom: 104,
    backgroundColor: '#444'
  }
};

/**
 * Component to
 *
 * Params:
 */
class EditSimulation extends React.Component {
  state = {
    open: false
  };


  constructor(props) {
    super(props);

    this.state = {
      name: 'name',
      description: 'description',
      params: {
        timeStep: 'timestep',
        simSpeed: 'simSpeed',
        currentSpeed: 'currentSpeed',
        voltageRange: 'voltageRange',
        powerRange: 'powerRange',
        flags: 'flags',
        scope_speed: 'scopeSpeed'
      }
    }
  }

  slider() {
    return <Slider
        style={styles.input}
        min={0}
        max={100}
        step={5}
        defaultValue={50}
        value={20}
    />;
  }

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open
    });
  };

  render() {
    return (
        <List
            style={{
              overflow: 'hidden',
              padding: 0
            }}
        >

          <ListItem
              primaryText='Simulation Settings'
              leftAvatar={<Avatar src={componentImg}/>}
              secondaryText={this.state.name}
              style={{backgroundColor: blueGrey900}}
              />

          <NumberField
              labelText='Time step'
              description='Simulation speed (higher value resuls in faster simulation)'
              min={0}
              value='99'
          />

          <NumberField
              labelText='Simulation speed'
              description='Simulation speed (higher value resuls in faster simulation)'
              min={0}
              value='99'
          />

          <NumberField
              labelText='Current Speed'
              description='Simulation speed (higher value resuls in faster simulation)'
              min={0}
              value='99'
          />

          <NumberField
              labelText='Voltage Range'
              description='Simulation speed (higher value resuls in faster simulation)'
              min={0}
              value='99'
          />

          <Divider />

          <ListItem
              primaryText="Advanced Options"
              primaryTogglesNestedList={true}
              leftIcon={<CommunicationChatBubble />}
              open={this.state.open}
              onNestedListToggle={this.handleNestedListToggle}
              nestedItems={[
                <SelectInput
                    key={'AdvancedOptions'}
                    floatingLabelText={'title'}
                    description={'description'}
                    value={'1'}
                >
                  {
                    <MenuItem value={'1'} label='result' primaryText='primaryText'/>
                  }
                </SelectInput>
              ]}
          />

          <Divider />

          <CardText>
            <RaisedButton label='Update Simulation' fullWidth={true} primary={true}/>
          </CardText>

        </List>
    );
  }
}

export default EditSimulation;
