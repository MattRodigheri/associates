import React from "react";
import { Tabs, Tab } from "react-bootstrap";

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
          middle: "Meaghan",
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
          last: "Saitou",
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

  UNSAFE_componentWillMount() {
    let a = [];
    let b = [];
    let c = [];
    let d = [];
    let e = [];
    let f = [];
    let g = [];
    let h = [];
    let i = [];
    let j = [];
    let k = [];
    let l = [];
    let m = [];
    let n = [];
    let o = [];
    let p = [];
    let q = [];
    let r = [];
    let s = [];
    let t = [];
    let u = [];
    let v = [];
    let w = [];
    let x = [];
    let y = [];
    let z = [];
    this.state.names.forEach((name, index) => {
      const formattedName = (
        <div key={index}>{`${name.first} ${name.middle} ${name.last}`}</div>
      );
      if (name.last[0] === "A") {
        a.push(formattedName);
      }
      if (name.last[0] === "B") {
        b.push(formattedName);
      }
      if (name.last[0] === "C") {
        c.push(formattedName);
      }
      if (name.last[0] === "D") {
        d.push(formattedName);
      }
      if (name.last[0] === "E") {
        e.push(formattedName);
      }
      if (name.last[0] === "F") {
        f.push(formattedName);
      }
      if (name.last[0] === "G") {
        g.push(formattedName);
      }
      if (name.last[0] === "H") {
        h.push(formattedName);
      }
      if (name.last[0] === "I") {
        i.push(formattedName);
      }
      if (name.last[0] === "J") {
        j.push(formattedName);
      }
      if (name.last[0] === "K") {
        k.push(formattedName);
      }
      if (name.last[0] === "L") {
        l.push(formattedName);
      }
      if (name.last[0] === "M") {
        m.push(formattedName);
      }
      if (name.last[0] === "N") {
        n.push(formattedName);
      }
      if (name.last[0] === "O") {
        o.push(formattedName);
      }
      if (name.last[0] === "P") {
        p.push(formattedName);
      }
      if (name.last[0] === "Q") {
        q.push(formattedName);
      }
      if (name.last[0] === "R") {
        r.push(formattedName);
      }
      if (name.last[0] === "S") {
        s.push(formattedName);
      }
      if (name.last[0] === "T") {
        t.push(formattedName);
      }
      if (name.last[0] === "U") {
        u.push(formattedName);
      }
      if (name.last[0] === "V") {
        v.push(formattedName);
      }
      if (name.last[0] === "W") {
        w.push(formattedName);
      }
      if (name.last[0] === "X") {
        x.push(formattedName);
      }
      if (name.last[0] === "Y") {
        y.push(formattedName);
      }
      if (name.last[0] === "Z") {
        z.push(formattedName);
      }
    });
    this.setState({
      //TODO: alphabatize by last name
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z
    });
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey="a-b">
          <Tab eventKey="a-b" title="A-B">
            <div>A</div>
            {this.state.a}
            <div>B</div>
            {this.state.b}
          </Tab>
          <Tab eventKey="c-d" title="C-D">
            <div>C</div>
            {this.state.c}
            <div>D</div>
            {this.state.d}
          </Tab>
          <Tab eventKey="e-f" title="E-F">
            <div>E</div>
            {this.state.e}
            <div>F</div>
            {this.state.f}
          </Tab>
          <Tab eventKey="g-h" title="G-H">
            <div>G</div>
            {this.state.g}
            <div>H</div>
            {this.state.h}
          </Tab>
          <Tab eventKey="i-j" title="I-J">
            <div>I</div>
            {this.state.i}
            <div>J</div>
            {this.state.j}
          </Tab>
          <Tab eventKey="k-l" title="K-L">
            <div>K</div>
            {this.state.k}
            <div>L</div>
            {this.state.l}
          </Tab>
          <Tab eventKey="m-n" title="M-N">
            <div>M</div>
            {this.state.m}
            <div>N</div>
            {this.state.n}
          </Tab>
          <Tab eventKey="o-p" title="O-P">
            <div>O</div>
            {this.state.o}
            <div>P</div>
            {this.state.p}
          </Tab>
          <Tab eventKey="q-r" title="Q-R">
            <div>Q</div>
            {this.state.q}
            <div>R</div>
            {this.state.r}
          </Tab>
          <Tab eventKey="s-t" title="S-T">
            <div>S</div>
            {this.state.s}
            <div>T</div>
            {this.state.t}
          </Tab>
          <Tab eventKey="u-v" title="U-V">
            <div>U</div>
            {this.state.u}
            <div>V</div>
            {this.state.v}
          </Tab>
          <Tab eventKey="w-z" title="W-Z">
            <div>W</div>
            {this.state.w}
            <div>X</div>
            {this.state.x}
            <div>Y</div>
            {this.state.y}
            <div>Z</div>
            {this.state.z}
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
