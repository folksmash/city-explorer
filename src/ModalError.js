import React from "react";
import { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class ModalError extends Component {
  thisClick = () => {
    this.props.hideError();
  };

  render() {
    return (
      <>
        <Modal show={this.props.error} onHide={this.props.hideError}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>ERROR ERROR ERROR</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{this.props.errorMessage}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.hideError} variant="secondary">
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </>
    );
  }
}
