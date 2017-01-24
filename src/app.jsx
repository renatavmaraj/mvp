"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './searchbar.jsx';

class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      books: []
    };
  }

componentDidMount() {
  var myInit = {
    method: "GET"
  };

  fetch("/api/books", myInit).then((response) => {
    console.log("doingfetch")
    return response.json();
  }).then((data) => {
    this.state.books = data;
    this.setState(this.state);
  });
}

  render() {
    return (
    <div>
    <h1>Couch Librarian</h1>
      <Search />
    </div>
    );
  }

};

ReactDOM.render(<App />, document.getElementById('app'))