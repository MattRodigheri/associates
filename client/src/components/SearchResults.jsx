import React from "react";
import "../../styles/searchResults.css";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.search = this.search.bind(this);
  }

  search() {
    let resultingNames;
    if (this.props.results) {
      resultingNames = this.props.results.map((person, index) => {
        let fullName = "";
        for (const key in person.name) {
          fullName += `${person.name[key]} `;
        }
        let degrees = [];
        for (const key in person.years) {
          let degree;
          degree = person.years[key];
          degrees.push(` ${degree}`);
        }

        return <div key={index}>{`${fullName} ${degrees.join(", ")}`}</div>;
      });
      if (this.props.value.includes(" ")) {
        this.setState({
          results: this.props.value
        });
      } else {
        this.setState({
          results: resultingNames
        });
      }
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.search}>SEARCH</button>
        <div className="resultsContainer">{this.state.results}</div>
      </div>
    );
  }
}

export default SearchResults;
