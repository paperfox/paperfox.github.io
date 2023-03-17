import React, { useState, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function CardModal({ reverseCard, dataImg, dataContent }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Button variant="tertiary" className="float-end" onClick={handleShow} aria-label={`More information about ` + dataContent.title}>
        <img src='/images/info-icon-by-i-con.svg' className="info-icon" alt="info icon"/>
      </Button>

      <Modal 
        show={show} 
        onHide={handleClose} 
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title as="h2">{dataContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-4 col-sm-5">
              <img src={'/images/cards/' + dataImg + '.jpg'} className="w-100" alt="..."/>
            </div>
            <div className="col">
              <h3>Divinatory Meanings</h3>
              <p>{dataContent.divMean}</p>
              <h3>Reversed</h3>
              <p>{dataContent.rvsMean}</p>
              <h3>About the Image</h3>
              <p>{dataContent.bkgInfo}</p>
              <a href={dataContent.link} target="_blank" rel="noreferrer">Rider-Waite Description</a>
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