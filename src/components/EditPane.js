import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Slider from 'material-ui/Slider';


const fields = {
  name: 'BJT',
  icon: 'BJT.png',
  description: 'Description of component',
  label: 'user_label',
  voltage: 10,
  current: 5,
  power: 1,
  params: [
    {
      name: 'polarity',
      title: 'Polarity',
      value: 1,
      default_value: -1,
      data_type: Math.sign,
      field_type: 'select',
      select_values: {'NPN': -1, 'PNP': 1}
    },
    {
      name: 'vbe',
      title: 'Base-Emitter voltage',
      value: 1,
      unit: 'Voltage',
      symbol: 'V',
      default_value: 0,
      data_type: parseFloat
    },
    {
      name: 'vbc',
      title: 'Base-Collector voltage',
      value: 0.05,
      unit: 'Voltage',
      symbol: 'V',
      default_value: 0,
      data_type: parseFloat
    },
    {
      name: 'beta',
      title: 'Current gain',
      hint: 'Ratio of collector current to base current',
      value: 100,
      description: 'Current gain',
      default_value: 100,
      data_type: parseFloat,
      range: [0, Infinity]
    },
    {
      name: 'show_current',
      title: 'Show current',
      value: true,
      description: 'Show current through gate',
      default_value: true,
      field_type: 'boolean',
      data_type: (val) => {
        !!val
      },
      range: [0, Infinity]
    },
    {
      name: 'duty_cycle',
      title: 'Duty Cycle',
      hint: 'Percentage of high voltage at output',
      value: 50,
      step: 1,
      description: 'Show current through gate',
      default_value: true,
      field_type: 'slider',
      toVal: (x) => x / 100,
      range: [0, 100]
    }
  ]
};

class EditPane extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'BJT',
      icon: 'BJT.png',
      description: 'Description of component',
      label: 'user_label',
      voltage: 10,
      current: 5,
      power: 1,
      params: {
        polarity: 1,
        vbe: 1,
        vbc: 0.05,
        beta: 100,
        show_current: true,
        duty_cycle: 50
      }
    }
  }

  addSelectField({
      name,
      title,
      hint,
      value,
      default_value,
      data_type,
      field_type,
      select_values
  }) {
    let raw_value = value ? value : default_value;

    return (
        <SelectField
            floatingLabelText={title}
            value={raw_value}
        >
          {
            Object.keys(select_values).map((key, index) => (
                <MenuItem value={select_values[key]} key={index} primaryText={key}/>
            ))
          }
        </SelectField>
    )
  }

  addTextField({
      name,
      title,
      hint,
      value,
      default_value,
      data_type,
      field_type
  }) {
    return (<TextField
        hintText={name}
        floatingLabelText={name}
        floatingLabelFixed={true}
        value={value}
    />);
  }

  addBooleanField({
      name,
      title,
      hint,
      value,
      default_value,
      data_type
  }) {
    return (<Toggle label={name} labelPosition='right' value={value}/>);
  }

  render() {
    return (
        <Drawer width={300} openSecondary={true} open={true}>
          <List>
            <ListItem
                primaryText='ResistorElm'
                leftAvatar={<Avatar src='images/yeoman.png'/>}
                secondaryText='Description'
            />

            <Divider />
            <Table selectable={false}>
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

            { this.addBooleanField({name: 'Sample', value: true}) }
            { this.addTextField({name: 'Sample', value: 'Text value'}) }
            { this.addSelectField({title: 'Sample', select_values: {'NPN': -1, 'PNP': 1}, value: 1}) }

          </List>
        </Drawer>
    );
  }
}

EditPane.defaultProps = {};

export default EditPane;
