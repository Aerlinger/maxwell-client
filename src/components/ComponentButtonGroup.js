require('normalize.css/normalize.css');

import { Accordion, Panel } from 'react-bootstrap';

import React from 'react';

class ComponentButtonGroup extends React.Component {
  render() {
    return (
      <Accordion activeKey={"1"} defaultActiveKey={"1"}>
        <Panel header="Collapsible Group Item #1" eventKey="1" expanded={true} defaultExpanded={true}>
          Button
        </Panel>
        <Panel header="Collapsible Group Item #2" eventKey="2">
          Buttons2
        </Panel>
        <Panel header="Collapsible Group Item #3" eventKey="3">
          Buttons3
        </Panel>
      </Accordion>
    );
  }
}

ComponentButtonGroup.defaultProps = {};

export default ComponentButtonGroup;
