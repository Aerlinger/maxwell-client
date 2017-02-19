import React from 'react';
import update from 'immutability-helper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {CardText} from 'material-ui/Card';

let { TimeSeries, SmoothieChart } = require('smoothie');

function getTruth(x) {
  if (typeof(x) == 'string')
    return ((x === '1') || (x === 'true'));
  else
    return !!x;
}

var componentImg = require('../images/components/v1/bjt.png');

const fields = {
  name: 'Bipolar Junction Transistor',
  icon: componentImg,
  description: 'Description of component',
  label: 'user_label',
  voltage: 10,
  current: 5,
  power: 1,
  info: [
    {
      label: 'Mode',
      value: 'Forward-Active'
    }
  ],
  params: [
    {
      name: 'polarity',
      title: 'Polarity',
      value: 1,
      default_value: -1,
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
      parse: parseFloat
    },
    {
      name: 'vbc',
      hint: 'Base-Collector voltage',
      title: 'Base-Collector voltage',
      value: 0.05,
      unit: 'Voltage',
      symbol: 'V',
      default_value: 0,
      parse: parseFloat
    },
    {
      name: 'beta',
      title: 'Current gain',
      hint: 'Ratio of collector current to base current',
      value: 100,
      description: 'Current gain',
      default_value: 100,
      parse: parseFloat,
      range: [0, Infinity]
    },
    {
      name: 'show_current',
      title: 'Show current',
      value: true,
      description: 'Show current through gate',
      default_value: true,
      field_type: 'boolean',
      parse: (x) => getTruth(x)
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
      parse: (x) => (parseFloat(x) / 100),
      range: [0, 100]
    }
  ]
};

class EditPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = fields;
  }

  findParam(name) {
    return this.state.params.findIndex((item) => item['name'] == name);
  }

  handleChange(key, changeObj, value) {
    let paramIdx = this.findParam(key);

    var changeObj = {};
    changeObj[paramIdx] = {value: {$set: value}};

    if (paramIdx >= 0) {
      this.setState({
        params: update(this.state.params, changeObj)
      }, () => console.log('change:', this.state, key, paramIdx, changeObj, value));
    }
  }

  addSelectField({
      name,
      title,
      hint,
      value,
      select_values
  }) {
    return (
        <SelectField
            key={name}
            floatingLabelText={title}
            errorText={hint}
            value={value}
            onChange={this.handleChange.bind(this, name)}
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
      value
  }) {
    return (<TextField
        key={name}

        inputStyle={{fontFamily: 'Courier'}}
        hintText={name}
        errorText={hint}
        floatingLabelText={title}
        floatingLabelFixed={true}
        value={value}
        onChange={this.handleChange.bind(this, name)}
    />);
  }

  addBooleanField({
      name,
      title,
      value
  }) {
    return (<Toggle label={title}
                    key={name}
                    labelPosition='right'
                    value={value}
                    onChange={this.handleChange.bind(this, name)}/>);
  }

  addField(obj) {
    let value = obj['value'];
    let default_value = obj['default_value'];
    let raw_value = value ? value : default_value;

    obj['value'] = raw_value;

    if (obj['field_type'] == 'select')
      return this.addSelectField(obj);
    else if (obj['field_type'] == 'boolean')
      return this.addBooleanField(obj);
    else
      return this.addTextField(obj);
  }

  getParams() {
    let params = this.state.params;

    var paramsObj = {};

    params.map((param) => {
      paramsObj[param['name']] = param['value']
    });

    return paramsObj;
  }

  setupCurrentScope() {
    this.currentSeries = new TimeSeries();

    let chart = new SmoothieChart({
      millisPerPixel: 35,
      grid: {fillStyle: 'transparent', millisPerLine: 1000, lineWidth: 0.5, verticalSections: 0},
      labels: {fillStyle: '#000000', precision: 0}
    });

    chart.addTimeSeries(this.currentSeries, {strokeStyle: 'rgba(0, 0, 200, 1)', lineWidth: 1});
    chart.streamTo(document.getElementById('current_series'), 500);

    setInterval((evt) => {
      this.sampleCurrent.bind(this)(100*Math.random());
    }, 500);
  }

  setupVoltageScope() {
    this.voltageSeries = new TimeSeries();

    let chart = new SmoothieChart({
      millisPerPixel: 35,
      grid: {fillStyle: 'transparent', millisPerLine: 1000, lineWidth: 0.5, verticalSections: 0},
      labels: {fillStyle: '#000000', precision: 0}
    });

    chart.addTimeSeries(this.voltageSeries, {strokeStyle: 'rgba(255, 0, 200, 1)', lineWidth: 1});
    chart.streamTo(document.getElementById('voltage_series'), 500);

    setInterval((evt) => {
      this.sampleVoltage.bind(this)(100*Math.random());
    }, 500);
  }

  sampleCurrent(voltage) {
    if (this.currentSeries) {
      this.currentSeries.append(new Date().getTime(), voltage);
    }
  }

  sampleVoltage(voltage) {
    if (this.voltageSeries) {
      this.voltageSeries.append(new Date().getTime(), voltage);
    }
  }

  componentDidMount() {
    this.setupVoltageScope.bind(this)();
    this.setupCurrentScope.bind(this)();
  }

  render() {
    let addField = this.addField.bind(this);

    let styles = {
      leftColumn: {
        fontFamily: "Courier New",
        fontSize: 12,
        fontWeight: 'bold',
        width: '8rem',
        paddingRight: '5px',
        color: 'green'
      },
      centerColumn: {
        fontFamily: "Courier New",
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

    return (
        <Paper className='side-panel' style={{display: 'block', position: 'absolute', width: '296px', right: 0, top: 50, bottom: 0, overflowY: 'scroll'}}>
          <List>

            <ListItem
                primaryText={this.state.name}
                leftAvatar={<Avatar src={this.state.icon}/>}
                secondaryText='Description'
            >

            </ListItem>

            <Divider />
            <Table selectable={false}>
              <TableBody displayRowCheckbox={false}>

                <TableRow>
                  <TableRowColumn style={styles.leftColumn}>Voltage</TableRowColumn>
                  <TableRowColumn style={styles.centerColumn}>
                    <span className='quantity'>{this.state.voltage}</span>
                    <span className='symbol'>V</span>
                  </TableRowColumn>
                  <TableRowColumn style={styles.chart}>
                    <canvas id='voltage_series' width='200' height='40'></canvas>
                  </TableRowColumn>
                </TableRow>


                <TableRow>
                  <TableRowColumn style={styles.leftColumn}>Current</TableRowColumn>
                  <TableRowColumn style={styles.centerColumn}>{this.state.current}A</TableRowColumn>
                  <TableRowColumn style={styles.chart}>
                    <canvas id='current_series' width='200' height='40'></canvas>
                    </TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>

            <Divider />

            <Table selectable={false}>
              <TableBody displayRowCheckbox={false}>
                {
                  this.state.info.map((infoObj, i) => (

                      <TableRow key={i}>
                        <TableRowColumn>{infoObj['label']}</TableRowColumn>
                        <TableRowColumn>{infoObj['value']}</TableRowColumn>
                      </TableRow>
                  ))
                }

              </TableBody>
            </Table>

            <Divider />

            <CardText>
              {
                this.state.params.map((paramObj) => (
                    addField(paramObj)
                ))
              }

              <RaisedButton label='Update' fullWidth={true} primary={true}/>
            </CardText>

          </List>
        </Paper>
    );
  }
}

export default EditPanel;
