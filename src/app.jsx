"use strict";
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      value: '',
      books: [],
      currentBook: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("thisstatevalue", this.state.value);
    var arr = [];
    var that = this;
    this.state.books.map(function(book){
      if(book.category === "Graphic") {
       arr.push(book);
       that.setState({currentBook:arr});
        console.log("curerntBook: ", that.state.currentBook);
      }
    })
  }



  componentDidMount() {
    var myInit = {
      method: "GET"
    };

    fetch("/api/books", myInit).then((response) => {
      console.log("doingfetch")
      return response.json();
    }).then((data) => {
      this.setState({books:data});
    });
  }

  render() {
    var that = this;
    return (
      <div className="main">
      <div>
      <h1>Couch Librarian</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Bottle:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
      <div className='recs'><ul>
  {that.state.currentBook.map((book,i) => {
      return (
      <li>{book.title}</li>
        )}
  )}
      </ul>
      </div>
      </div>
    );
  }

};

ReactDOM.render(<App />, document.getElementById('app'))