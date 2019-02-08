import React, { Component } from 'react'
import axios from 'axios'
import '../index.css';
import Suggestions from './Suggestions'
import Autocomplete from '../../node_modules/react-autocomplete'
import {AsyncTypeahead} from 'react-bootstrap-typeahead';
const API_URL = 'http://api.dataatwork.org/v1/jobs/autocomplete'

class Search extends Component {
  state = {
    error: false,
    query: '',
    results: [],
    search: '',
    isLoading: false
  }
  //function that calls the data work API
  getInfo = () => {
    axios.get(`${API_URL}?contains=${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data
        })
      })
      .catch(() => this.setState({ error: true }))
  }


  render() {
    return (
      <div>
        <AsyncTypeahead
          {...this.state}
          labelKey="suggestion"
          filterBy={['suggestion']}
          minLength={2}
          onSearch={this._handleSearch}
          placeholder="Search for job skills..."
          options={this.state.results}
          onClick={this._onClear}
          renderMenuItemChildren={(option, props) => (
            <div>{option.suggestion}</div>
          )}
          selected={this.state.selected}
        />        
      </div>

    )
  }
  //function to search the coincidences
  _handleSearch = (query) => {
    this.setState({
      query: query
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

  _onClear = (query) => {
    this.setState({
      results: []
    })
  }
}

export default Search
