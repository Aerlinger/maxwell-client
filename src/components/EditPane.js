import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Slider from 'material-ui/Slider';

import SidePaneStyles from '../styles/SidePane.css';


const styles = {
  block: {
    maxWidth: 250
  },
  toggle: {
    marginBottom: 16
  },
  thumbOff: {
    backgroundColor: '#ffcccc'
  },
  trackOff: {
    backgroundColor: '#ff9d9d'
  },
  thumbSwitched: {
    backgroundColor: 'red'
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d'
  },
  labelStyle: {
    color: 'red'
  }
};

class EditPane extends React.Component {
  render() {
    return (
        <Drawer width={300} openSecondary={true} open={true}>
          <List>
            <ListItem
                primaryText="ResistorElm"
                leftAvatar={<Avatar src="images/yeoman.png"/>}
                secondaryText="Description"
            />

            <Divider />
            <Table selectable={false}>
              <TableHeader displayRowCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Status</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                <TableRow>
                  <TableRowColumn>Voltage</TableRowColumn>
                  <TableRowColumn>10</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Current</TableRowColumn>
                  <TableRowColumn>1</TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
            <Divider />

            <ListItem>

              <SelectField
                  floatingLabelText="Frequency"
                  value={1}
              >
                <MenuItem value={1} primaryText="Never"/>
                <MenuItem value={2} primaryText="Every Night"/>
                <MenuItem value={3} primaryText="Weeknights"/>
                <MenuItem value={4} primaryText="Weekends"/>
                <MenuItem value={5} primaryText="Weekly"/>
              </SelectField>
            </ListItem>

            <ListItem>
              <TextField
                  hintText="Hint Text"
                  floatingLabelText="Fixed Floating Label Text"
                  floatingLabelFixed={true}
              />
            </ListItem>

            <ListItem primaryText="Events and reminders" rightToggle={<Toggle />}/>

            <ListItem>
              <Slider defaultValue={0.5} axis="x-reverse" />
            </ListItem>

            <Divider />

            <TextField
                hintText="Hint Text"
                floatingLabelText="Fixed Floating Label Text"
                floatingLabelFixed={true}
            />

            <TextField
                hintText="Hint Text"
                floatingLabelText="Fixed Floating Label Text"
                floatingLabelFixed={true}
            />

            <SelectField
                floatingLabelText="Frequency"
                value={1}
            >
              <MenuItem value={1} primaryText="Never"/>
              <MenuItem value={2} primaryText="Every Night"/>
              <MenuItem value={3} primaryText="Weeknights"/>
              <MenuItem value={4} primaryText="Weekends"/>
              <MenuItem value={5} primaryText="Weekly"/>
            </SelectField>

            <Toggle
                label="Styling"
                thumbStyle={styles.thumbOff}
                trackStyle={styles.trackOff}
                thumbSwitchedStyle={styles.thumbSwitched}
                trackSwitchedStyle={styles.trackSwitched}
                labelStyle={styles.labelStyle}
            />

            <Toggle
                label="Label on the right"
                labelPosition="right"
                style={styles.toggle}
            />

            <Slider defaultValue={0.5} axis="x-reverse" />
          </List>
        </Drawer>
    );
  }
}

EditPane.defaultProps = {};

export default EditPane;
