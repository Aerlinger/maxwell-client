import React from 'react';
import update from 'immutability-helper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import Avatar from 'material-ui/Avatar';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import {CardText} from 'material-ui/Card';

let {TimeSeries, SmoothieChart} = require('smoothie');

let styles = {
  leftColumn: {
    fontFamily: 'Courier New',
    fontSize: 12,
    fontWeight: 'bold',
    width: '8rem',
    paddingRight: '5px',
    color: '#00c400'
  },
  centerColumn: {
    fontFamily: 'Courier New',
    fontSize: 10,
    width: '5rem',
    paddingLeft: '5px',
    paddingRight: '5px',
    fontSize: 10,
    fontWeight: 'bold'
  },
  chart: {
    paddingTop: 3,
    paddingLeft: 0,
    paddingRight: 0
  }
};

let componentImg = require('../images/components/v1/bjt.png');

class EditSimulation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <List>

          <ListItem
              primaryText='Simulation Settings'
              leftAvatar={<Avatar src={componentImg}/>}
              secondaryText='Description'
          >

          </ListItem>

          <Divider />
          <Table selectable={false}>
            <TableBody displayRowCheckbox={false}>

              <TableRow>
                <Toggle label={'title'}
                        key={'name'}
                        labelPosition='right'
                        value={'value'}/>

              </TableRow>

              <TableRow>
                <ListItem>
                  <TextField
                      key={'name'}
                      inputStyle={{fontFamily: 'Courier'}}
                      hintText={'name'}
                      errorText={'hint'}
                      floatingLabelText={'title'}
                      floatingLabelFixed={true}
                      value={'value'}
                  />
                </ListItem>
              </TableRow>

            </TableBody>
          </Table>


          <CardText>

            <TextField
                key={'name'}
                inputStyle={{fontFamily: 'Courier'}}
                hintText={'name'}
                errorText={'hint'}
                floatingLabelText={'title'}
                floatingLabelFixed={true}
                value={'value'}
            />

            <TextField
                key={'name2'}
                inputStyle={{fontFamily: 'Courier'}}
                hintText={'name'}
                errorText={'hint'}
                floatingLabelText={'title'}
                floatingLabelFixed={true}
                value={'value'}
            />

            <Slider
                min={0}
                max={100}
                step={5}
                defaultValue={50}
                value={20}
            />

            <TextField
                key={'name3'}
                inputStyle={{fontFamily: 'Courier'}}
                hintText={'name'}
                errorText={'hint'}
                floatingLabelText={'title'}
                floatingLabelFixed={true}
                value={'value'}
            />


            <RaisedButton label='Update' fullWidth={true} primary={true}/>
          </CardText>

        </List>
    );
  }
}

export default EditSimulation;
