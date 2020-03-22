import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './App.css';
import BookForm from './components/form'
import listEl from './components/listItems';
import Modal from './components/modal';
import ModalRemove from './components/modal2';
import capitalize from './components/capitalize';
let removeList;
class App extends React.Component {
  state={
    booksList: listEl,
    inputAuthor: "",
    inputBook: "",
    inputYear: "",
    isModalOpen: false,
    isRemoveModalOpen: false
  }
handleSubmit = (e) => {
  // const items = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];
  // items.push(this.state.bookList)
  // console.log(items)
  // localStorage.setItem('todo', JSON.stringify(items));
  const newBook = `${capitalize(this.state.inputBook)}, ${capitalize(this.state.inputAuthor)}, ${this.state.inputYear}`;
  this.setState({
    booksList: [...this.state.booksList, newBook],
    inputAuthor: "",
    inputBook: "",
    inputYear: "",
  })
  this.handleModal();
  // e.preventDefault()
}
handleInput = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  })
}
// handleCreateNewList = (book) => {
//   removeList = this.state.booksList.filter(item => {
//     console.log(item !== book, item, book, 'hmmmmmm')
//     return item !== book
//   })
//   console.log(removeList)
//   return removeList;
// }
handleRemove = (booklist) => {
  console.log(this.state.booksList, 'book')
  this.setState({
    booksList: booklist
  })
  this.handleRemoveModal()
}
handleModal = (e) => {
  console.log(this)
  this.setState({
    isModalOpen: !this.state.isModalOpen,
  })
}
handleRemoveModal = (book) => {
  removeList = this.state.booksList.filter(item => {
    console.log(item !== book, item, book, 'hmmmmmm')
    return item !== book
  })
  console.log(removeList)
  this.setState({
    isRemoveModalOpen: !this.state.isRemoveModalOpen,
  })
  return removeList;
}


// onClick={() => this.handleRemove(item)}

  render() {  
  return (
    <div>
    <div className="container-flex">
    <div className="listItem flex-item">
      <h2>how to not blow your mind</h2>
      <ListGroup className="bookList">
    {this.state.booksList.map((item, index) => 
      <ListGroup.Item onClick={() => this.handleRemoveModal(item)}  name="jhj" data="jh" book={item} className="listElement" key={index}>{item}
      </ListGroup.Item>
    )
    
  }
    </ListGroup>
    </div>
    <BookForm handleInput={this.handleInput} handleModal={this.handleModal} state={this.state}/>

    </div>
    {this.state.isModalOpen ? <Modal handleSubmit={this.handleSubmit} handleModal={this.handleModal}/> : null}
    {this.state.isRemoveModalOpen ? <ModalRemove removeList={removeList}  handleRemove={this.handleRemove} handleRemoveModal={this.handleRemoveModal}/> : null}
    </div>
    
  );
  }
}
export default App;
// <ModalRemove item={removeList[0].props.book} handleRemove={this.handleRemove} handleRemoveModal={this.handleRemoveModal}/> : null}