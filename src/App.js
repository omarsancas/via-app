import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Start bootstrap</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          </ul>
          <Search/>
          <div><i className="fa fa-bell"></i></div>
          <div><i className="fa fa-envelope"></i></div>
          <div><i className="fa fa-user"></i></div>
        </div>
        </nav>
      </div>
    );
  }
}

export default App;
