import React from "react";
import * as contentful from "contentful";
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

    this.fetchAssociate = this.fetchAssociates.bind(this);
    this.setAssociates = this.setAssociates.bind(this);
  }

  componentDidMount() {
    this.fetchAssociates().then(this.setAssociates);
  }

  fetchAssociates() {
    return this.client.getEntries();
  }

  setAssociates(response) {
    let names = [];
    for (const person in response.items) {
      names.push(response.items[person].fields);
    }
    console.log(response.items);
    this.setState({
      names
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
        {/* 
        <Counter count={this.state.test ? this.state.test.length : 0} />
        <Search names={this.state.test} />
        {this.state && this.state.test && <NameTabs names={this.state.test} />} */}
      </div>
    );
  }
}

export default App;
