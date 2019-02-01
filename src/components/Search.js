import React, { Component } from 'react'
import axios from 'axios'

import Suggestions from './Suggestions'
const API_URL = 'http://api.dataatwork.org/v1/jobs/autocomplete'

class Search extends Component {
  state = {
    error: false,
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`${API_URL}?begins_with=${this.state.query}`)
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

  render() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          ref={input => this.search = input}
          onChange={this.handleInputChange}/>
          <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search
