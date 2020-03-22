import React from 'react';
import { Button } from 'react-bootstrap';
function ModalRemove(props) {
  console.log("removeeeeeeee", props.removeList)
  return (
    <div className="modal1"><h2 className="question">Do you want to <span className="remove">Remove</span> a book?</h2>
    <div className="btns">
    <Button id="yn" onClick={() => props.handleRemove(props.removeList)} variant="success">Yes</Button>
    <Button id="yn" onClick={props.handleRemoveModal} variant="secondary">No</Button></div></div>
  )
}
export default ModalRemove;