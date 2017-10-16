import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

import './auto-suggest.css';

const renderSuggestion = name => <div>{name}</div>;
const getSuggestionValue = name => name;

class SearchInput extends Component{
  constructor(props = { onChange: console.log }) {
    super(props);
  }
  componentDidMount(){
    this.input.focus();
  }
  storeInputReference(autosuggest) {
    if (autosuggest !== null) {
      this.input = autosuggest.input;
    }
  }
  render() {
    const inputProps = {
      placeholder: 'search',
      value: this.props.search,
      onChange: (event, { newValue }) => this.props.setSearch(newValue)
    };

    return(
      <form onSubmit={(event) => {
        event.preventDefault();
        // we also want to know when user searches for something
        // for which there is no suggestion
        this.props.onSuggestionSelected();
      }}>
        <Autosuggest
          suggestions={this.props.suggestions}
          onSuggestionSelected={this.props.onSuggestionSelected}
          onSuggestionsFetchRequested={() => this.props.getSuggestions()}
          onSuggestionsClearRequested={() => this.props.getSuggestions()}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          ref={autosuggest => this.storeInputReference(autosuggest)}
        />
      </form>
    );
  }
}

export default SearchInput;
