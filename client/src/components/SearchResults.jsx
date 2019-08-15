import React from "react";

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
        let years = "";
        for (const key in person.years) {
          let degree;
          if (key === "unspecified") {
            degree = "";
          } else {
            degree = key;
          }
          years += `${degree} ${person.years[key]} `;
        }
        return (
          <div key={index}>{`${person.name.first} ${person.name.middle} ${
            person.name.last
          } ${years}`}</div>
        );
      });
      this.setState({
        results: resultingNames
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.search}>Search</button>
        {this.state.results}
      </div>
    );
  }
}

export default SearchResults;
