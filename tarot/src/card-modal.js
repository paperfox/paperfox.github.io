import React, { useState, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function CardModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Button variant="secondary" onClick={handleShow}>
        Card Desc
      </Button>

      <Modal 
        show={show} 
        onHide={handleClose} 
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Name of Card Goes Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-4 col-sm-5">
              <img src={'images/cards/0.png'} className="w-100" alt="..."/>
            </div>
            <div className="col">
              <p>Text Goes here</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default CardModal;