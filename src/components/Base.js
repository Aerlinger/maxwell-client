import React, {PropTypes} from 'react';

import MainToolbar from '../components/MainToolbar'

const Base = ({children}) => (
    <div>
      {children}


    </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
