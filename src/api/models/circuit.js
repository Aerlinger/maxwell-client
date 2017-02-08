let mongoose = require( 'mongoose' );

let CircuitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Circuit', CircuitSchema);
