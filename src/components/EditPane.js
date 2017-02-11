import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class EditPane extends React.Component {
  render() {
    return (
        <Paper >
          <div>


            <List>
              <Subheader>General</Subheader>
              <ListItem
                  primaryText="Profile photo"
                  secondaryText="Change your Google+ profile photo"
              />

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

            </List>

            <Divider />
            <List>
              <Subheader>Hangout Notifications</Subheader>
              <ListItem
                  leftCheckbox={<Checkbox />}
                  primaryText="Notifications"
                  secondaryText="Allow notifications"
              />
            </List>
          </div>
          <div>
            <List>
              <ListItem
                  primaryText="When calls and notifications arrive"
                  secondaryText="Always interrupt"
              />
            </List>
            <Divider />
            <List>
              <Subheader>Priority Interruptions</Subheader>
              <ListItem primaryText="Events and reminders" rightToggle={<Toggle />}/>
            </List>
            <Divider />
            <List>
              <Subheader>Hangout Notifications</Subheader>
              <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />}/>
            </List>
          </div>
        </Paper>
    );
  }
}

EditPane.defaultProps = {};

export default EditPane;
