import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import {CardText} from 'material-ui/Card';


import Chip from 'material-ui/Chip';
import {blue300, indigo900} from 'material-ui/styles/colors';

import update from 'immutability-helper';

const styles = {
  chip: {
    margin: 0
  },
  chip_label: {
    fontSize: '8px'
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
  icon: 'images/components/v1/bjt.png',
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

        inputStyle={{fontFamily: "Courier"}}
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

  render() {
    let addField = this.addField.bind(this);

    return (
        <Paper style={{display: "block", position: "absolute", width: "290px", right: 0, top: 56, bottom: 0, overflowY: "scroll"}}>
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
                  <TableRowColumn>Voltage</TableRowColumn>
                  <TableRowColumn><span className='quantity'>{this.state.voltage}</span><span
                      className='symbol'>V</span></TableRowColumn>
                  <TableRowColumn>{this.state.voltage}</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Current</TableRowColumn>
                  <TableRowColumn>{this.state.current}A</TableRowColumn>
                  <TableRowColumn>{this.state.current}</TableRowColumn>
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
            <Subheader>Parameters</Subheader>

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


  static renderInput(labelText, value, symbolText, helpText) {
    let wrapper = document.createElement('div');
    wrapper.className = "param-control";

    let label = document.createElement('label');

    let input_wrapper = document.createElement('div');
    input_wrapper.className = "input-group";

    let input = document.createElement('input');

    input.setAttribute("type", "number");
    input.setAttribute("value", value);

    input.className = "input-group-field"

    label.append(labelText);
    label.append(input_wrapper);
    // label.append(help);

    input_wrapper.append(input);

    if (symbolText) {
      let symbolSpan = document.createElement('span');

      symbolSpan.innerText = symbolText;
      symbolSpan.className = "input-group-label";

      input_wrapper.append(symbolSpan);
    }

    wrapper.append(label)

    if (helpText && helpText != "") {
      let help = document.createElement("p");
      help.className = "help-text";
      help.innerText = helpText;

      wrapper.append(help)
    }

    return wrapper;
  }

  static renderSelect(labelText, selectValues, helpText) {
    let wrapper = document.createElement('div');
    wrapper.className = "param-control";

    let label = document.createElement('label');
    let select = document.createElement('select');

    for (let value in selectValues) {
      var optionElm = document.createElement("option");
      optionElm.setAttribute("value", selectValues[value]);
      optionElm.innerText = value;

      select.append(optionElm);
    }

    label.append(labelText);

    wrapper.append(label);
    wrapper.append(select);

    if (helpText && helpText != "") {
      let help = document.createElement("p");
      help.className = "help-text";
      help.innerText = helpText;
      wrapper.append(help);
    }

    return wrapper;
  }

  static renderCheckbox(labelText, value, helpText) {
    let wrapper = document.createElement('div');
    wrapper.className = "param-control";

    let input = document.createElement('input');
    let inputID = "inputID";

    input.setAttribute("type", "checkbox");
    input.setAttribute("value", value);

    if (value) {
      input.setAttribute("checked", "true");
    }
    input.setAttribute("id", inputID);

    let label = document.createElement('label');
    label.append(labelText);
    label.setAttribute("for", inputID);

    wrapper.append(input);
    wrapper.append(label);

    if (helpText && helpText != "") {
      let help = document.createElement("p");
      help.className = "help-text";
      help.innerText = helpText;
      wrapper.append(help);
    }

    return wrapper;
  }

  static renderSlider(labelText, value, rangeMin, rangeMax, step, helpText) {
    let sliderId = "sliderID";

    let wrapper = document.createElement('div');
    wrapper.className = "param-control slider-container small-collapse";

    let label = document.createElement('label');
    label.append(labelText);

    let sliderContainer = document.createElement('div');
    sliderContainer.className = "small-8 columns";

    let slider = document.createElement("div");

    slider.setAttribute("data-slider", "");
    slider.setAttribute("data-initial-start", value);
    slider.setAttribute("data-start", rangeMin);
    slider.setAttribute("data-end", rangeMax);
    slider.setAttribute("data-step", step);
    slider.setAttribute("class", "slider");

    let handleSpan = document.createElement("span");

    handleSpan.setAttribute("data-slider-handle", "");
    handleSpan.setAttribute("role", "slider");
    handleSpan.setAttribute("aria-controls", sliderId);
    handleSpan.setAttribute("class", "slider-handle");

    let handleFillSpan = document.createElement("span");
    handleFillSpan.setAttribute("data-slider-fill", "");
    handleFillSpan.setAttribute("class", "slider-fill");

    slider.append(handleSpan);
    slider.append(handleFillSpan);

    let inputContainer = document.createElement('div');
    inputContainer.className = "small-4 columns"

    let input = document.createElement('input');
    input.id = sliderId;
    input.setAttribute("id", sliderId);
    input.setAttribute("type", "number");

    inputContainer.append(input);

    input.className = "input-group-field";

    let clearfix = document.createElement('div');
    clearfix.className = "clearfix";

    wrapper.append(label);
    wrapper.append(sliderContainer);
    wrapper.append(inputContainer);
    wrapper.append(clearfix);

    sliderContainer.append(slider);

    return wrapper
  }


  /**
   <div class="form-group row has-success">
   <label for="inputHorizontalSuccess" class="col-sm-2 col-form-label">
   Resistance
   </label>

   <div class="col-sm-10">
   <div>
   <input type="float" value="100" class="form-control form-control-success" data-range-min="-Infinity" data-range-max="Infinity" data-component-id="1484677177243" id="inputHorizontalSuccess" placeholder="1000">
   <small class="form-symbol text-muted">Ω</small>
   </div>

   <div>
   <small class="form-text text-muted">Amount of current per unit voltage applied to this resistor (ideal).</small>
   </div>

   </div>
   </div>
   */
  static renderEdit(circuitComponent) {
    let fields = circuitComponent.constructor.Fields;

    let container = document.createElement("div");
    container.className = "container";

    let componentTitle = document.createElement("h6");
    componentTitle.className = "componentTitle";
    componentTitle.innerText = circuitComponent.getName();

    container.append(componentTitle);
    let hr = document.createElement("hr");
    hr.className = "component-title-sep";
    container.append(hr);

    let form = document.createElement("form");

    container.append(form);

    for (let fieldName in fields) {
      if (fieldName) {

        let field = fields[fieldName];

        let fieldValue = circuitComponent[fieldName];
        let componentId = circuitComponent.component_id;
        let fieldType = field["field_type"] || "float";
        let fieldDefault = field["default_value"];
        let fieldLabel = field["name"];
        let fieldSymbol = field["symbol"] || "";
        let fieldDescription = field["description"];
        let fieldRange = field["range"];
        let selectValues = field["select_values"];

        // Set our min/max permissible values if they exist, otherwise default to +/- Infinity
        let fieldMin = (fieldRange && fieldRange[0]) || -Infinity;
        let fieldMax = (fieldRange && fieldRange[1]) || Infinity;

        // Render form object into DOM
        let inputElm;

        if (fieldType == "select") {
          inputElm = Maxwell.renderSelect(fieldLabel, selectValues, fieldSymbol, fieldDescription);
        } else if (fieldType == "boolean") {
          inputElm = Maxwell.renderCheckbox(fieldLabel, fieldValue, fieldDescription);
        } else {
          inputElm = Maxwell.renderInput(fieldLabel, fieldValue, fieldSymbol, fieldDescription);
        }

        inputElm.addEventListener("change", function(evt) {
          //  TODO: Push change event on history
        });

        inputElm.addEventListener("input", function(evt) {
          let updateObj = {};
          updateObj[fieldName] = evt.target.value;

          console.log("INPUT", `circuitComponent.update(${JSON.stringify(updateObj)})`);

          circuitComponent.update(updateObj);
        });

        form.append(inputElm);

      } else {
        console.error(`Field name missing for ${circuitComponent}`)
      }
    }

    return container;
  }
}

export default EditPanel;
