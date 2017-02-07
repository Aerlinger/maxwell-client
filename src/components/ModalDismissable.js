import React from 'react';

import {Modal, Button, Popover, Tooltip, OverlayTrigger} from 'react-bootstrap';

class ModalDismissable extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    const popover = (
        <Popover id='modal-popover' title='popover'>
          very popover. such engagement
        </Popover>
    );
    const tooltip = (
        <Tooltip id='modal-tooltip'>
          wow.
        </Tooltip>
    );

    return (
        <div>
          <p>Click to get the full Modal experience!</p>

          <Button
              bsStyle='primary'
              bsSize='large'
              onClick={this.open.bind(this)}
          >
            Launch demo modal
          </Button>

          <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.props.children}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close.bind(this)}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
    );
  }
}

ModalDismissable.defaultProps = {};

export default ModalDismissable;

