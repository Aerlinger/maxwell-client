import React from 'react';
import update from 'immutability-helper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import {CardText} from 'material-ui/Card';

import {TimeSeries, SmoothieChart} from 'smoothie';

import componentImg from '../images/components/v1/bjt.png';
import Subheader from 'material-ui/Subheader';

import SelectInput from './inputs/SelectInput';
import ToggleInput from './inputs/ToggleInput';
import NumberField from './inputs/NumberField';

let styles = {
  smallRowColumn: {
    height: 24,
    fontFamily: 'Courier New',
    fontSize: 12,
    fontWeight: 'bold'
  },
  smallRow: {
    height: 24
  },
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
  },
  textField: {
    size: '11px',
    fontSize: '11px',
    fontFamily: 'Courier New'
  }
};

function getTruth(x) {
  if (typeof(x) == 'string')
    return ((x === '1') || (x === 'true'));
  else
    return !!x;
}

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
    },
    {
      label: 'Mode',
      value: 'Forward-Active'
    },
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

class RightPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...fields,
      clientHeight: 200
    };
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
      description = 'description',
      value,
      select_values
  }) {
    return <SelectInput
        key={name}
        name={name}
        floatingLabelText={title}
        description={description}
        value={value}
        selectedElement={this.props.selectedElement}
    >
      {
        Object.keys(select_values).map((key, index) => (
            <MenuItem value={select_values[key]} key={index} label={key} primaryText={key}/>
        ))
      }
    </SelectInput>;
  }

  addTextField({
      name,
      title,
      description = 'description',
      symbol,
      unit,
      value,
      range
  } = {}) {
    let min = range ? range[0] : -Infinity;
    let max = range ? range[1] : Infinity;

    return <NumberField
        key={title}
        name={name}
        hintText={'props.hintText'}
        errorText={'props.errorText'}
        unit={unit}
        labelText={title}
        description={description}
        symbol={symbol}
        selectedElement={this.props.selectedElement}
        min={min}
        max={max}
        value={value.toString()}
    />;
  }

  addBooleanField({
      name,
      title,
      description = 'description',
      value
  }) {
    return <ToggleInput label={title}
                        name={name}
                        key={title}
                        labelPosition='right'
                        description={description}
                        toggled={value}
                        defaultToggled={value}
                        selectedElement={this.props.selectedElement}
                        onChange={this.handleChange.bind(this, name)}/>;
  }

  addField(obj) {
    let elmParams = this.props.selectedElement.params;

    let value = elmParams[obj['name']];
    let default_value = obj['default_value'];
    let raw_value = value ? value : default_value;

    obj['value'] = raw_value;

    console.log(obj);

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

    setInterval(() => {
      this.sampleCurrent.bind(this)(100 * Math.random());
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

    setInterval(() => {
      this.sampleVoltage.bind(this)(100 * Math.random());
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

    let {clientHeight} = this.refs.elementHeader;

    this.setState({editHeaderHeight: clientHeight});
  }

  render() {
    let addField = this.addField.bind(this);

    let selectedElement = this.props.selectedElement;
    let fields = selectedElement.constructor.Fields;

    return (
        <List style={{padding: 0}}>
          <div className='editElementHeader' ref='elementHeader'>

            <ListItem
                primaryText={selectedElement.getName()}
                leftAvatar={<Avatar src={this.state.icon}/>}
                secondaryText='Description'
                style={{backgroundColor: '#222'}}
            >
            </ListItem>

            <Table selectable={false}>
              <TableBody displayRowCheckbox={false}>
                <TableRow>
                  <TableRowColumn style={styles.leftColumn}>
                    Voltage
                  </TableRowColumn>
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

            <Table selectable={false} fixedHeader={false}>
              <TableBody displayRowCheckbox={false} stripedRows>
                {
                  this.state.info.map((infoObj, i) => (
                      <TableRow displayBorder={false} key={i} style={styles.smallRow}>
                        <TableRowColumn style={styles.smallRowColumn}>{infoObj['label']}</TableRowColumn>
                        <TableRowColumn style={styles.smallRowColumn}>{infoObj['value']}</TableRowColumn>
                      </TableRow>
                  ))
                }

              </TableBody>
            </Table>

            <Divider />
            <Subheader style={{backgroundColor: '#222'}}>Properties</Subheader>
            <Divider />

          </div>

          <div
              style={{
                position: 'absolute',
                top: this.state.editHeaderHeight,
                left: 0,
                right: 0,
                bottom: 0
              }}>

            <div
                style={{
                  height: '100%',
                  //position: 'absolute',
                  overflowY: 'auto',
                  overflowX: 'hidden',
                  backgroundColor: '#444'
                }}
            >

              {
                Object.keys(fields).map(fieldKey => addField(Object.assign(fields[fieldKey], {name: fieldKey})))
              }

              <Divider />

              <CardText>
                <RaisedButton label='Update' fullWidth={true} primary={true}/>
              </CardText>
            </div>
          </div>

        </List>
    );
  }
}

export default RightPanel;
