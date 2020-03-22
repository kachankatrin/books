import React from 'react';
import Yearbook from './date';
import { Form, Button } from 'react-bootstrap';
function BookForm (props) {
  return(
  <Form id="bookForm"   className="flex-item">
      <Form.Group>
      <Form.Label className="label" htmlFor="bookname">Bookname:</Form.Label>
      <Form.Control pattern="[a-z/A-Z]{2,30}" required onChange={props.handleInput}  id="inputBook" name="bookname" value={props.state.inputBook}/>
      </Form.Group>
      <Form.Group>
      <Form.Label className="label" htmlFor="author">Author:</Form.Label>
      <Form.Control pattern="[a-z/A-Z]{2,30}" required onChange={props.handleInput} id="inputAuthor" name="author" value={props.state.inputAuthor}/>
      </Form.Group>
      <Form.Group>
      <Form.Label className="label" htmlFor="year">Year:</Form.Label>
      <Form.Control type="number" onChange={props.handleInput} id="inputYear" name="year" min="0" max={Yearbook} value={props.state.inputYear}/>
      </Form.Group>
      <Button onClick={props.handleModal} variant="outline-success" type="button">Add a book</Button>
      </Form>
  )
}

export default BookForm;