let mongoose = require( 'mongoose' );

let SimParamsSchema = new mongoose.Schema({
  name: String,
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
  pos: [Number],
  flags: Number,
  params: {}
});

let CircuitSchema = new mongoose.Schema({
  params: SimParamsSchema,
  components: [ComponentParamsSchema],
  slug: String
});

module.exports = CircuitSchema;
