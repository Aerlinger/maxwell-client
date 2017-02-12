import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const Dashboard = ({ secretData, reqData }) => (
    <Card className="container">
      <CardTitle
          title="Dashboard"
          subtitle="You should get access to this page only after authentication."
      />

      {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}

      <pre>
        {JSON.stringify(reqData)}
      </pre>
    </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
