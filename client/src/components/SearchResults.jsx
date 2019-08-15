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
        let fullName = "";
        for (const key in person.name) {
          fullName += `${person.name[key]} `;
        }
        let degrees = [];
        for (const key in person.years) {
          let degree;
          if (key === "unspecified") {
            degree = "";
          } else {
            degree = key;
          }
          degrees.push(`${degree} ${person.years[key]}`);
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
        <button onClick={this.search}>Search</button>
        {this.state.results}
      </div>
    );
  }
}

export default SearchResults;
