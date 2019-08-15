import React from "react";
import * as contentful from "contentful";
import keys from "../../../keys.js";
import Counter from "./Counter.jsx";
import Search from "./Search.jsx";
import NameTabs from "./NameTabs.jsx";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      names: [
        {
          name: { first: "Eusebius", last: "Addicks" },
          years: { unspecified: 1964 },
          yearAdded: 2010
        },
        {
          name: {
            first: "Ashwin",
            middle: "Adwoa",
            last: "Trevor"
          },
          years: { MBA: 1988 },
          yearAdded: 2010
        },
        {
          name: {
            first: "Kacper",
            middle: "Archippos",
            last: "Gonzales"
          },
          years: { unspecified: 1988 },
          yearAdded: 2008
        },
        {
          name: {
            first: "Chanda",
            middle: "Jai",
            last: "Aldebrandi"
          },
          years: { unspecified: 1984, MS: 1987 },
          yearAdded: 2007
        },
        {
          name: {
            first: "Anshel",
            middle: "Germund",
            last: "Ó Riain"
          },
          years: { unspecified: 1987, MS: 1988, MBA: 1998 },
          yearAdded: 2006
        },
        {
          name: {
            first: "Clodovicus",
            middle: "Heliodoro",
            last: "Watkins"
          },
          years: { unspecified: 1991 },
          yearAdded: 2005
        },
        {
          name: {
            first: "Henrike",
            middle: "Ahmet",
            last: "Zilberschlag"
          },
          years: { unspecified: 1962 },
          yearAdded: 2004
        },
        {
          name: {
            first: "Yerachme'el",
            middle: "Madhuri",
            last: "Vinter"
          },
          years: { unspecified: 1979, MBA: 1982 },
          yearAdded: 2003
        },
        {
          name: {
            first: "Isabelle",
            middle: "Sonja",
            last: "Ngô"
          },
          years: { MBA: 1988 },
          yearAdded: 2002
        },
        {
          name: {
            first: "Rothaid",
            middle: "Phinees",
            last: "Kasun"
          },
          years: { unspecified: 1978, JD: 1982 },
          yearAdded: 2001
        },
        {
          name: {
            first: "Stas",
            middle: "Fabricius",
            last: "Solomon"
          },
          years: { unspecified: 1986, MS: 1987, MBA: 1992 },
          yearAdded: 2000
        },
        {
          name: {
            first: "Staša",
            middle: "Avanti",
            last: "Tatham"
          },
          years: { unspecified: 1987 },
          yearAdded: 1999
        },
        {
          name: {
            first: "Míša",
            middle: "Marama",
            last: "Thompsett"
          },
          years: { JD: 1970, MBA: 1971 },
          yearAdded: 1998
        },
        {
          name: {
            first: "Seachlann",
            middle: "Constantin",
            last: "Süß"
          },
          years: { unspecified: 1965 },
          yearAdded: 1997
        },
        {
          name: {
            first: "Sibilla",
            middle: "Núria",
            last: "Sorg"
          },
          years: { unspecified: 1966 },
          yearAdded: 1996
        },
        {
          name: {
            first: "Kajetán",
            middle: "Laia",
            last: "Sorg"
          },
          years: { MBA: 1997 },
          yearAdded: 1995
        },
        {
          name: {
            first: "Spartak",
            middle: "Laia",
            last: "Tillens"
          },
          years: { unspecified: 1965 },
          yearAdded: 1994
        },
        {
          name: {
            first: "Vikram",
            middle: "Asim",
            last: "Ó Cuilinn"
          },
          years: { MBA: 1966 },
          yearAdded: 1993
        },
        {
          name: {
            first: "Sarala",
            middle: "Hari",
            last: "Edison"
          },
          years: { MBA: 1997 },
          yearAdded: 1992
        },
        {
          name: {
            first: "Sher",
            middle: "Šime",
            last: "Jardine"
          },
          years: { unspecified: 1995, MBA: 2000 },
          yearAdded: 1991
        }
      ]
    };

    this.client = contentful.createClient({
      space: keys.space,
      accessToken: keys.accessToken
    });

    this.fetchPosts = this.fetchPosts.bind(this);
    this.setPosts = this.setPosts.bind(this);
  }

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts() {
    return this.client.getEntries();
  }

  setPosts(response) {
    this.setState({
      posts: response.items
    });
  }

  render() {
    if (this.state.posts.length > 0) {
      console.log(this.state.posts);
    }
    return (
      <div>
        <Counter count={this.state.names.length} />
        <Search names={this.state.names} />
        <NameTabs names={this.state.names} />
      </div>
    );
  }
}

export default App;
