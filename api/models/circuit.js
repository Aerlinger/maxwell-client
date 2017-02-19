let mongoose = require('mongoose');

let SimParamsSchema = new mongoose.Schema({
  timeStep: Number,
  simSpeed: Number,
  currentSpeed: Number,
  voltageRange: Number,
  powerRange: Number,
  flags: Number,
  created_at: Date,
  updated_at: Date,
  scope_speed: Number
});

let ComponentParamsSchema = new mongoose.Schema({
  name: String,
  label: String,
  pos: [Number],
  flags: Number,
  params: {}
});

let CircuitSchema = new mongoose.Schema({
      name: String,
      description: String,
      params: SimParamsSchema,
      components: [ComponentParamsSchema],
      slug: String,
      private: {type: Boolean, default: true}
    },
    {
      timestamps: true
    });

mongoose.model('Circuit', CircuitSchema);

module.exports = CircuitSchema;
