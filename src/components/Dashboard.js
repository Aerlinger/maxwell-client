import React, {PropTypes} from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import {List} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';

import Divider from 'material-ui/Divider';

import ColorPickerButton from './ColorPickerButton'

// class Dashboard = ({ secretData, user }) => (
class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  updateParam(paramName, paramValue) {
    var obj = {};

    obj[paramName] = paramValue;

    this.setState(obj);
  }

  colorSettingWidget(display_preferences, label, key) {
    return (
        <div>
          <ColorPickerButton label={label}
                             onChange={this.updateParam.bind(this, key)}
                             color={display_preferences[key]}/>
          <Divider />
        </div>
    );
  }

  valueSettingWidget(display_preferences, label, key) {
    return (
        <div>
          <TextField
              defaultValue={display_preferences[key]}
              floatingLabelText={label}
          />
        </div>
    );
  }

  booleanSettingWidget(display_preferences, label, key) {
    return (
        <div>
          <Toggle label={label}
                  labelPosition='right'
                  defaultToggled={display_preferences[key]}
                  onChange={this.updateParam.bind(this, key)}/>
          <Divider />
        </div>
    );
  }


  render() {
    let secretData = this.props.secretData;
    let user = this.props.user;

    if (!user || !secretData)
      return null;

    let colorSetting = this.colorSettingWidget.bind(this, user.display_preferences);
    let valueSetting = this.valueSettingWidget.bind(this, user.display_preferences);
    let booleanSetting = this.booleanSettingWidget.bind(this, user.display_preferences);

    return (
        <Card className='container'>
          <CardTitle title='Dashboard' subtitle='You should get access to this page only after authentication.'/>

          <CardText style={{fontSize: '16px', color: 'green'}}>{secretData}</CardText>

          <form>
            <List>
              <Divider />
              <Subheader>Environment config</Subheader>
              {colorSetting('Background color', 'background_color')}
              {colorSetting('Grid color', 'grid_color')}
              {colorSetting('Grid secondary color', 'grid_secondary_color')}
              {booleanSetting('Display grid', 'display_grid')}
              {colorSetting('Selection marquee color', 'selection_marquee_color')}
              {valueSetting('Selection marquee thickness', 'selection_marquee_thickness')}
            </List>

            <List>
              <Divider />
              <Subheader>Circuit Display</Subheader>
              {booleanSetting('Display info on hover', 'display_info_on_hover')}
              {valueSetting('Wire width', 'wire_width')}
              {colorSetting('Wire color', 'wire_color')}
              {valueSetting('Junction radius', 'post_radius')}
              {colorSetting('Fill color', 'fill_color')}
              {colorSetting('Outline color', 'outline_color')}
              {valueSetting('Outline width', 'outline_width')}
              {booleanSetting('Skip voltage rendering', 'display_voltage')}
              {booleanSetting('Skip current rendering', 'display_current')}
              {booleanSetting('Skip power rendering', 'display_power')}
            </List>

            <List>
              <Divider />
              <Subheader>Circuit Labels</Subheader>
              {valueSetting('Label font', 'label_font')}
              {valueSetting('Label font size', 'label_size')}
              {colorSetting('Label color', 'label_color')}
              {valueSetting('Label decimal places', 'label_decimal_places')}
            </List>

            <List>
              <Divider />
              <Subheader>Chip Elements</Subheader>
              {colorSetting('Pin color', 'pin_color')}
              {valueSetting('Pin radius', 'pin_radius')}
              {colorSetting('Pin label color', 'chip_label_color')}
              {colorSetting('Chip outline color', 'chip_outline_color')}
              {valueSetting('Chip outline width', 'chip_outline_width')}
            </List>

            <List>
              <Divider />
              <Subheader>Scope Rendering</Subheader>

              {valueSetting('Scope line width', 'scope_line_width')}
              {colorSetting('Scope background color', 'scope_background_color')}
              {colorSetting('Scope current color', 'scope_current_color')}
              {colorSetting('Scope voltage color', 'scope_voltage_color')}
              {colorSetting('Scope power color', 'scope_power_color')}
            </List>

            <List>
              <Divider />
              <Subheader>Developer</Subheader>

              {valueSetting('Debug level', 'debug_level')}

              {booleanSetting('Display node numbers', 'display_node_numbers')}
              {booleanSetting('Display bounding boxes', 'display_bounding_boxes')}
              {booleanSetting('Display vertices', 'display_vertices')}
              {booleanSetting('Verbose info on hover', 'verbose_info_on_hover')}
            </List>

            <RaisedButton label='Update' fullWidth={true} primary={true}/>
          </form>

          <pre>
            {JSON.stringify(user, null, 4)}
          </pre>

        </Card>
    )
  }
}

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
