import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import ColorPickerButon from './ColorPickerButton'

const Dashboard = ({ secretData, user }) => (
    <Card className="container">
      <CardTitle
          title="Dashboard"
          subtitle="You should get access to this page only after authentication."
      />

      {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}

      <pre>
        {JSON.stringify(user, null, 4)}
      </pre>

      <form>
        <ColorPickerButon label="Color item" color="rgba(255,0,0,0.8)"/>
      </form>

    </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
