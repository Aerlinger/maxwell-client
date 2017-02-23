import React from 'react';
import TextField from 'material-ui/TextField';

let styles = {
  symbol: {
    fontFamily: 'Courier New',
    fontSize: 13,
    position: 'relative',
    bottom: 59,
    right: 3,
    float: 'right',
    color: 'gray',
    fontWeight: 'bold'
  }
};

module.exports = function (props) {
  return (
      <div>
        <TextField {...props} />

        <span className='text-symbol' style={styles.symbol}>Volts</span>

      </div>
  );
};
