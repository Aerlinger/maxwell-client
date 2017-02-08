let mongoose = require('mongoose');

let DisplayPreferencesSchema = mongoose.Schema({
  debug_level: Number,
  display_info_on_hover: Boolean,

  background_color: String,
  foreground_color: String,
  outline_color: String,
  outline_width: String,
  grid_size: Number,
  grid_color: String,
  display_grid: Boolean,

  wire_width: Number,
  wire_color: String,
  post_radius: Number,
  display_current: Boolean,
  display_voltage: Boolean,

  label_size: Number,
  label_color: String,
  label_font: String,
  decimal_places: Number,

  chip_pin_color: String,
  chip_pin_radius: Number,
  chip_label_color: String,
  chip_outline_color: String,
  chip_outline_width: Number,

  scope_line_width: Number,
  scope_background_color: String,
  scope_current_color: String,
  scope_voltage_color: String,
  hide_scope_current: Boolean,
  hide_scope_voltage: Boolean,

  selection_marquee_color: String,
  selection_color: String
});

module.exports = mongoose.model('DisplayPreferences', DisplayPreferencesSchema);
