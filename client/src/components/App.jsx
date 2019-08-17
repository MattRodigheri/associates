import React from "react";
import * as contentful from "contentful";
import axios from "axios";
import keys from "../../../keys.js";
import Counter from "./Counter.jsx";
import Search from "./Search.jsx";
import NameTabs from "./NameTabs.jsx";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      test: [
        {
          name: { first: "Matt", last: "Rodigheri" },
          years: { degree1: "BA 2005" },
          yearAdded: 2019
        }
      ]
    };

    this.client = contentful.createClient({
      space: keys.space,
      accessToken: keys.accessToken
    });

    // this.fetchAssociate = this.fetchAssociates.bind(this);
    // this.setAssociates = this.setAssociates.bind(this);
  }

  // componentDidMount() {
  //   this.fetchAssociates().then(this.setAssociates);
  // }

  // fetchAssociates() {
  //   return this.client.getEntries();
  // }

  // setAssociates(response) {
  //   let names = [];
  //   response.items.forEach(person => {
  //     names.push(person.fields);
  //   });
  //   this.setState({
  //     names
  //   });
  // }

  componentDidMount() {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${keys.space}/entries?access_token=${
          keys.accessToken
        }&limit=1000`
      )
      .then(response => {
        console.log(response.data);
        let names = [];
        response.data.items.forEach(person => {
          names.push(person.fields);
        });
        this.setState({
          names
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Counter count={this.state.names ? this.state.names.length : 0} />
        <Search names={this.state.names} />
        {this.state && this.state.names && (
          <NameTabs names={this.state.names} />
        )}
      </div>
    );
  }
}

export default App;
