import React, {PropTypes} from 'react';

const Base = ({children}) => (
    <div>
      {children}
    </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
