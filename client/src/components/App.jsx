import React from "react";
import Counter from "./Counter.jsx";
import Search from "./Search.jsx";
import NameTabs from "./NameTabs.jsx";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      names: [
        {
          name: { first: "Eusebius", last: "Addicks" },
          years: { unspecified: 1964 }
        },
        {
          name: {
            first: "Ashwin",
            middle: "Adwoa",
            last: "Trevor"
          },
          years: { MBA: 1988 }
        },
        {
          name: {
            first: "Kacper",
            middle: "Archippos",
            last: "Gonzales"
          },
          years: { unspecified: 1988 }
        },
        {
          name: {
            first: "Chanda",
            middle: "Jai",
            last: "Aldebrandi"
          },
          years: { unspecified: 1984, MS: 1987 }
        },
        {
          name: {
            first: "Anshel",
            middle: "Germund",
            last: "Ó Riain"
          },
          years: { unspecified: 1987, MS: 1988, MBA: 1998 }
        },
        {
          name: {
            first: "Clodovicus",
            middle: "Heliodoro",
            last: "Watkins"
          },
          years: { unspecified: 1991 }
        },
        {
          name: {
            first: "Henrike",
            middle: "Ahmet",
            last: "Zilberschlag"
          },
          years: { unspecified: 1962 }
        },
        {
          name: {
            first: "Yerachme'el",
            middle: "Madhuri",
            last: "Vinter"
          },
          years: { unspecified: 1979, MBA: 1982 }
        },
        {
          name: {
            first: "Isabelle",
            middle: "Sonja",
            last: "Ngô"
          },
          years: { MBA: 1988 }
        },
        {
          name: {
            first: "Rothaid",
            middle: "Phinees",
            last: "Kasun"
          },
          years: { unspecified: 1978, JD: 1982 }
        },
        {
          name: {
            first: "Stas",
            middle: "Fabricius",
            last: "Solomon"
          },
          years: { unspecified: 1986, MS: 1987, MBA: 1992 }
        },
        {
          name: {
            first: "Staša",
            middle: "Avanti",
            last: "Tatham"
          },
          years: { unspecified: 1987 }
        },
        {
          name: {
            first: "Míša",
            middle: "Marama",
            last: "Thompsett"
          },
          years: { JD: 1970, MBA: 1971 }
        },
        {
          name: {
            first: "Seachlann",
            middle: "Constantin",
            last: "Süß"
          },
          years: { unspecified: 1965 }
        },
        {
          name: {
            first: "Sibilla",
            middle: "Núria",
            last: "Sorg"
          },
          years: { unspecified: 1966 }
        },
        {
          name: {
            first: "Kajetán",
            middle: "Laia",
            last: "Sorg"
          },
          years: { MBA: 1997 }
        },
        {
          name: {
            first: "Spartak",
            middle: "Laia",
            last: "Tillens"
          },
          years: { unspecified: 1965 }
        },
        {
          name: {
            first: "Vikram",
            middle: "Asim",
            last: "Ó Cuilinn"
          },
          years: { MBA: 1966 }
        },
        {
          name: {
            first: "Sarala",
            middle: "Hari",
            last: "Edison"
          },
          years: { MBA: 1997 }
        },
        {
          name: {
            first: "Sher",
            middle: "Šime",
            last: "Jardine"
          },
          years: { unspecified: 1995, MBA: 2000 }
        }
      ]
    };
  }

  render() {
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
