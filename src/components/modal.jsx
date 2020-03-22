import React from 'react';
import { Button } from 'react-bootstrap';
function Modal(props) {
  return (
    <div className="modal1"><h2 className="question">Do you want to <span className="add">Add</span> a book?</h2>
    <div className="btns">
    <Button id="yn" onClick={props.handleSubmit} variant="success">Yes</Button>
    <Button id="yn" onClick={props.handleModal} variant="secondary">No</Button></div></div>
  )
}
export default Modal;