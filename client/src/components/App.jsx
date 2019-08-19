import React from "react";
import * as contentful from "contentful";
import Tabletop from "Tabletop";
import axios from "axios";
import keys from "../../../keys.js";
import Counter from "./Counter.jsx";
import Search from "./Search.jsx";
import NameTabs from "./NameTabs.jsx";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};

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
    // CONTENTFUL API:
    // axios
    //   .get(
    //     `https://cdn.contentful.com/spaces/${keys.space}/entries?access_token=${
    //       keys.accessToken
    //     }&limit=1000`
    //   )
    //   .then(response => {
    //     console.log(response.data);
    //     let names = [];
    //     response.data.items.forEach(person => {
    //       names.push(person.fields);
    //     });
    //     this.setState({
    //       names
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    Tabletop.init({
      key: "1l63qhoaWDXjEwDNKtdLN7J99judJfBJ7r6_O2D5xWV4",
      callback: googleData => {
        console.log(googleData);
      },
      simpleSheet: true
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
