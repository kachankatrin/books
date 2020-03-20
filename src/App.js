import React from 'react';
import logo from './logo.svg';
import './App.css';
import myBooks from './books';
import listEl from './components/listItems';
import Yearbook from './components/date';
import Capitalize from './components/capitalize';
class App extends React.Component {
  state={
    booksList: Object.values(listEl),
    inputAuthor: "",
    inputBook: "",
    inputYear: "",
    newBook: ''
  }
handleSubmit = (e) => {
  // const items = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];
  // items.push(this.state.bookList)
  // console.log(items)
  // localStorage.setItem('todo', JSON.stringify(items));
  this.setState({
    // items,
    booksList: [...this.state.booksList, this.state.newBook],
    inputAuthor: "",
    inputBook: "",
    inputYear: "",
  })
  e.preventDefault()
  console.log(this.state.booksList)
  
}
handleInput = (e) => {
  this.setState({
    inputBook: e.target.id === "bookname" ? e.target.value : this.state.inputBook,
    inputAuthor: e.target.id === "author" ? e.target.value : this.state.inputAuthor,
    inputYear: e.target.id === "year" ? e.target.value : this.state.inputYear,
  })
  console.log(this.state.newBook)
}
makeNewBook = (e) => {
  this.setState({
    newBook: `${Capitalize(this.state.inputBook)}, ${Capitalize(this.state.inputAuthor)}, ${this.state.inputYear}`
  })
}
  render() {  
  return (
    <div>
      <h2>how to not blow your mind</h2>
      <ul className="bookList">
    {this.state.booksList.map((item, index) => 
      <li className="listElement" key={index}>{item}</li>
    )}
    </ul>
      <form id="bookForm" onSubmit={this.handleSubmit}>
      <label className="label" htmlFor="bookname">Bookname:</label>
      <input pattern="[a-z/A-Z]{2,30}" required onChange={this.handleInput}  id="bookname" name="bookname" value={this.state.inputBook}/>
      <label className="label" htmlFor="author">Author:</label>
      <input required onChange={this.handleInput} id="author" name="author" value={this.state.inputAuthor}/>
      <label className="label" htmlFor="year">Year:</label>
      <input type="number" onChange={this.handleInput} id="year" name="year" min="0" max={Yearbook} value={this.state.inputYear}/>
      <button type="submit" onClick={this.makeNewBook}>Add a book</button>
      </form>
    </div>
  );
  }
}
export default App;
