import React from "react";
import Counter from "./Counter.jsx";
import Search from "./Search.jsx";
import NameTabs from "./NameTabs.jsx";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      names: [
        { first: "Ashwin", middle: "Adwoa", last: "Trevor", years: "MBA '88" },
        {
          first: "Kacper",
          middle: "Archippos",
          last: "Gonzales",
          years: { unspecified: 1988 }
        },
        {
          first: "Chanda",
          middle: "Jai",
          last: "Aldebrandi",
          years: { unspecified: 1984, MS: 1987 }
        },
        {
          first: "Anshel",
          middle: "Germund",
          last: "Ó Riain",
          years: { unspecified: 1987, MS: 1988, MBA: 1998 }
        },
        {
          first: "Eusebius",
          //   middle: "Meaghan",
          last: "Addicks",
          years: { unspecified: 1964 }
        },
        {
          first: "Clodovicus",
          middle: "Heliodoro",
          last: "Watkins",
          years: { unspecified: 1991 }
        },
        {
          first: "Henrike",
          middle: "Ahmet",
          last: "Zilberschlag",
          years: { unspecified: 1962 }
        },
        {
          first: "Yerachme'el",
          middle: "Madhuri",
          last: "Vinter",
          years: { unspecified: 1979, MBA: 1982 }
        },
        {
          first: "Isabelle",
          middle: "Sonja",
          last: "Ngô",
          years: { MBA: 1988 }
        },
        {
          first: "Rothaid",
          middle: "Phinees",
          last: "Kasun",
          years: { unspecified: 1978, JD: 1982 }
        },
        {
          first: "Stas",
          middle: "Fabricius",
          last: "Solomon",
          years: { unspecified: 1986, MS: 1987, MBA: 1992 }
        },
        {
          first: "Staša",
          middle: "Avanti",
          last: "Tatham",
          years: { unspecified: 1987 }
        },
        {
          first: "Míša",
          middle: "Marama",
          last: "Thompsett",
          years: { JD: 1970, MBA: 1971 }
        },
        {
          first: "Seachlann",
          middle: "Constantin",
          last: "Süß",
          years: { unspecified: 1965 }
        },
        {
          first: "Sibilla",
          middle: "Núria",
          last: "Sorg",
          years: { unspecified: 1966 }
        },
        {
          first: "Kajetán",
          middle: "Laia",
          last: "Sorg",
          years: { MBA: 1997 }
        },
        {
          first: "Spartak",
          middle: "Laia",
          last: "Tillens",
          years: { unspecified: 1965 }
        },
        {
          first: "Vikram",
          middle: "Asim",
          last: "Ó Cuilinn",
          years: { MBA: 1966 }
        },
        {
          first: "Sarala",
          middle: "Hari",
          last: "Edison",
          years: { MBA: 1997 }
        },
        {
          first: "Sher",
          middle: "Šime",
          last: "Jardine",
          years: { unspecified: 1995, MBA: 2000 }
        }
      ]
    };
  }

  //TODO: add years to names
  //TODO: make name list separate components
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
