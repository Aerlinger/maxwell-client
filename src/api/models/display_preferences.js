let mongoose = require('mongoose');

let DisplayPreferencesSchema = mongoose.Schema({
  debug_level: { type: Number, default: 0},
  display_info_on_hover: {type: Boolean, default: true},
  display_node_numbers: {type: Boolean, default: false},
  display_bounding_boxes: {type: Boolean, default: false},

  background_color: {type: String, default: "#AA9999"},
  foreground_color: {type: String, default: "#FFF"},
  outline_color: {type: String, default: "#444"},
  outline_width: {type: Number, default: 2},
  grid_size: {type: Number, default: 8},
  grid_color: {type: String, default: "#555"},
  display_grid: {type: Boolean, default: true},

  wire_width: {type: Number, default: 3},
  wire_color: {type: String, default: "#222"},
  post_radius: {type: Number, default: 3},
  display_current: {type: Boolean, default: true},
  display_voltage: {type: Boolean, default: true},

  label_size: {type: Number, default: 7.5},
  label_color: {type: String, default: "#1a2f80"},
  label_font: {type: String, default: 'Monaco'},
  label_decimal_places: {type: Number, default: 1},

  chip_pin_color: {type: String, default: "#222"},
  chip_pin_radius: {type: Number, default: 3},
  chip_label_color: {type: String, default: "#008e00"},
  chip_outline_color: {type: String, default: "#2a1d20"},
  chip_outline_width: {type: Number, default: 1},

  scope_line_width: {type: Number, default: 1},
  scope_background_color: {type: String, default: "#FAFAFA"},
  scope_current_color: {type: String, default: "#26be00"},
  scope_voltage_color: {type: String, default: "#a80012"},
  scope_power_color: {type: String, default: "#be6900"},

  selection_marquee_color: {type: String, default: "#be9700"},
  highlighted_component_color: {type: String, default: "#bbbe00"}
},
  { timestamps: true}
);

mongoose.model('DisplayPreferences', DisplayPreferencesSchema);

module.exports = DisplayPreferencesSchema;
