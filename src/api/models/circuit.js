let mongoose = require( 'mongoose' );

var SimParamsSchema = new mongoose.Schema({
  name: String,
  simSpeed: Number,
  currentSpeed: Number,
  voltageRange: Number,
  powerRange: Number,
  flags: Number,
  created_at: Date,
  updated_at: Date
});

var ComponentParamsSchema = new mongoose.Schema({
  name: String,
  pos: [Number],
  flags: Number,
  params: {}
});

let CircuitSchema = new mongoose.Schema({
  params: SimParamsSchema,
  components: [ComponentParamsSchema]
});

module.exports = mongoose.model('Circuit', CircuitSchema);
