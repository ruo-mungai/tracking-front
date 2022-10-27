import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function LogOut() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to sign out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} id="logout-secondary">
            cancel
          </Button>
          <Button variant="primary" onClick={handleClose} id="logout-primary">
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogOut