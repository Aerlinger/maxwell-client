require('!!raw!normalize.css/normalize.css');

import { ListGroup, ListGroupItem } from 'react-bootstrap';

import React from 'react';

class SidePanel extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem href="#" active>Link 1</ListGroupItem>
        <ListGroupItem href="#">Link 2</ListGroupItem>
        <ListGroupItem href="#" disabled>Link 3</ListGroupItem>

        <ListGroupItem bsStyle="success">Success</ListGroupItem>
        <ListGroupItem bsStyle="info">Info</ListGroupItem>
        <ListGroupItem bsStyle="warning">Warning</ListGroupItem>
        <ListGroupItem bsStyle="danger">Danger</ListGroupItem>

        <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
        <ListGroupItem header="Heading 2" href="#">Linked item</ListGroupItem>
        <ListGroupItem header="Heading 3" bsStyle="danger">Danger styling</ListGroupItem>
      </ListGroup>
    );
  }
}

SidePanel.defaultProps = {};

export default SidePanel;
