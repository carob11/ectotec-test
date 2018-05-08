import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

export default class InputSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { address: '', shouldFetchSuggestions: false }
  }

  handleChange = (address) => {
    let shouldFetchSuggestions = false
    if (address.length >= 2) {
      shouldFetchSuggestions = true
    }
    this.setState({ address, shouldFetchSuggestions })
  }

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        shouldFetchSuggestions={this.state.shouldFetchSuggestions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Ciudad y Estado:</label>
              <input
                {...getInputProps({
                  placeholder: '',
                  className: 'location-search-input form-control col-sm-10'
                })}
              />
            </div>
            <div className="autocomplete autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' }
                return (
                  <div {...getSuggestionItemProps(suggestion, { className, style })}>
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}