"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './searchbar.jsx';

class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      value: '',
      books: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
      <form onSubmit={this.handleSubmit}>
        <label>
          Name of Book:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

};

ReactDOM.render(<App />, document.getElementById('app'))