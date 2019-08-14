import React from "react";
import Autosuggest from "react-autosuggest";
import SearchResults from "./SearchResults.jsx";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      suggestions: []
    };

    this.escapeRegexCharacters = this.escapeRegexCharacters.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(
      this
    );
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
      this
    );
    this.search = this.search.bind(this);
  }

  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  getSuggestions(value) {
    const escapedValue = this.escapeRegexCharacters(value.trim());

    if (escapedValue === "") {
      return [];
    }

    const regex = new RegExp("\\b" + escapedValue, "i");

    return this.props.names.filter(person =>
      regex.test(this.getSuggestionValue(person))
    );
  }

  getSuggestionValue(suggestion) {
    let fullName = "";
    for (const key in suggestion.name) {
      fullName += `${suggestion.name[key]} `;
    }

    let years = "";
    for (const key in suggestion.years) {
      years += `${suggestion.years[key]} `;
    }

    return `${fullName} ${years}`;
  }

  renderSuggestion(suggestion) {
    let fullName = "";
    for (const key in suggestion.name) {
      fullName += `${suggestion.name[key]} `;
    }

    let years = "";
    for (const key in suggestion.years) {
      years += `${suggestion.years[key]} `;
    }

    return <div>{`${fullName} ${years}`}</div>;
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value),
      searchResults: this.getSuggestions(value)
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  search() {
    console.log("implement search function");
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "Search for a Name",
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
        <button onClick={this.search}>Search</button>
        <SearchResults />
      </div>
    );
  }
}

export default Search;
