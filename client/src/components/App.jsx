import React from "react";
import * as contentful from "contentful";
import axios from "axios";
import keys from "../../../keys.js";
import Counter from "./Counter.jsx";
import Search from "./Search.jsx";
import NameTabs from "./NameTabs.jsx";
import "../../styles/app.css";
import { totalmem } from "os";

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
  //   // for (const i = 0; i < t)
  //   return this.client.getEntries({
  //     limit: 1000
  //   });
  // }

  // setAssociates(response) {
  //   let names = [];
  //   console.log(response.items);
  //   response.items.forEach(person => {
  //     names.push(person);
  //   });
  //   this.setState({
  //     names
  //   });
  // }

  componentDidMount() {
    let names = [];
    axios
      .get(
        `https://cdn.contentful.com/spaces/${keys.space}/entries?access_token=${
          keys.accessToken
        }&limit=1000`
      )
      .then(response => {
        response.data.items.forEach(person => {
          names.push(person.fields);
        });

        this.setState({
          names
        });

        const loops = Math.ceil(response.data.total / 1000);
        let skip = 0;
        for (let i = 0; i < loops; i++) {
          skip += 1000;
          axios
            .get(
              `https://cdn.contentful.com/spaces/${
                keys.space
              }/entries?access_token=${
                keys.accessToken
              }&limit=1000&skip=${skip}`
            )
            .then(response => {
              const totalNames = this.state.names.concat(response.data.items);
              response.data.items.forEach(person => {
                names.push(person.fields);
              });
              this.setState({
                names: totalNames
              });
            });
        }
      })

      // .then(
      //   axios
      //     .get(
      //       `https://cdn.contentful.com/spaces/${
      //         keys.space
      //       }/entries?access_token=${keys.accessToken}&limit=1000&skip=1000`
      //     )
      //     .then(response => {
      //       // let names = [];
      //       response.data.items.forEach(person => {
      //         names.push(person.fields);
      //       });
      //       // this.setState({
      //       //   names
      //       // });
      //       // console.log(this.state.names);
      //     })
      // )
      // .then(
      //   axios
      //     .get(
      //       `https://cdn.contentful.com/spaces/${
      //         keys.space
      //       }/entries?access_token=${keys.accessToken}&limit=1000&skip=2000`
      //     )
      //     .then(response => {
      //       // let names = [];
      //       response.data.items.forEach(person => {
      //         names.push(person.fields);
      //       });
      //       this.setState({
      //         names
      //       });
      //       console.log(this.state.names);
      //     })
      // )
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <main>
        <header>
          <Counter
            className="counter"
            count={this.state.names ? this.state.names.length : 0}
          />
          <Search className="search" names={this.state.names} />
        </header>
        {this.state && this.state.names && (
          <NameTabs names={this.state.names} />
        )}
      </main>
    );
  }
}

export default App;
