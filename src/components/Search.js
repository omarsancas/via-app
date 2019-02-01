import React, { Component } from 'react'
import axios from 'axios'
import '../index.css';
import Suggestions from './Suggestions'
const API_URL = 'http://api.dataatwork.org/v1/jobs/autocomplete'

class Search extends Component {
  state = {
    error: false,
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`${API_URL}?contains=${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data
        })
      })
      .catch(() => this.setState({ error: true }))
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        // this.showDropdown()
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
        // this.hideDropdown()
      }
    })
  }



  selectSuggestion = e => {
    e.preventDefault();
    const text = e.currentTarget.textContent;
    this.proceedAutoComplete(text);
  };

  proceedAutoComplete(text) {
    //alert(text);
    this.textInput.value = text;
    this.setState({ show: false });
    this.props.onAutocomplete(text);
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ show: !this.state.show });
  }

  getFiltered(value){
    return this.props.items.filter(i => i.toLowerCase().includes(value.toLowerCase()))
  }

  handleKeyPress = e => {
    if (e.key === 'Enter' && this.getFiltered(e.target.value).length === 1) {
      this.proceedAutoComplete(this.getFiltered(e.target.value)); // стоило закэшировать результат this.getFiltered
    }
  }

  render() {
    const showSuggest = {
      display: this.state.show ? 'block' : 'none',
    }
    return (
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          ref={input => this.search = input}
          onChange={this.handleInputChange}/>
          <span className='suggestWrapper'>
          <ul className='suggestAutocomplete'>
          {this.state.results.map((r) => {
            return <li
                    key={r.uuid}
                    onClick={this.selectSuggestion}
                    >
                      {r.suggestion}
                    </li>
          })}
        </ul>
      </span>
      </form>
    )
  }
}

export default Search
