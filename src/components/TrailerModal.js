import React from "react";
import { Modal } from "react-bootstrap";

const TrailerModal = ({ showModal, setShowModal, trailerVideo }) => {
  console.log(trailerVideo);
  return (
    <Modal
      // style={{ border: "5px solid red" }}
      show={showModal}
      onHide={() => setShowModal(false)}
      // aria-labelledby="issue-detail-modal"
      animation
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={{ maxWidth: "840", width: "100%" }}>
        <iframe
          width="840"
          height="472.5"
          title={trailerVideo?.name}
          src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
          frameRate={0}
        ></iframe>
      </Modal.Body>
    </Modal>
  );
};

export default TrailerModal;
