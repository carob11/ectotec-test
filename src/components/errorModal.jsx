import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ErrorModal extends Component {
  render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Contacto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              {this.props.errors.map(err => {
                return <li key={err}>{err}</li>
              })}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.props.handleClose}>Aceptar</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    )
  }
}