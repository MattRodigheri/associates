import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import sort from "fast-sort";
import Letter from "./Letter.jsx";

class NameTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
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

    const sortedNames = sort(this.props.names).asc([
      person => person.name.last,
      person => person.name.first,
      person => person.name.middle
    ]);

    sortedNames.forEach((person, index) => {
      if (person.name.last[0] === "A") {
        a.push(person.name);
      }
      if (person.name.last[0] === "B") {
        b.push(person.name);
      }
      if (person.name.last[0] === "C") {
        c.push(person.name);
      }
      if (person.name.last[0] === "D") {
        d.push(person.name);
      }
      if (person.name.last[0] === "E") {
        e.push(person.name);
      }
      if (person.name.last[0] === "F") {
        f.push(person.name);
      }
      if (person.name.last[0] === "G") {
        g.push(person.name);
      }
      if (person.name.last[0] === "H") {
        h.push(person.name);
      }
      if (person.name.last[0] === "I") {
        i.push(person.name);
      }
      if (person.name.last[0] === "J") {
        j.push(person.name);
      }
      if (person.name.last[0] === "K") {
        k.push(person.name);
      }
      if (person.name.last[0] === "L") {
        l.push(person.name);
      }
      if (person.name.last[0] === "M") {
        m.push(person.name);
      }
      if (person.name.last[0] === "N") {
        n.push(person.name);
      }
      if (person.name.last[0] === "O") {
        o.push(person.name);
      }
      if (person.name.last[0] === "P") {
        p.push(person.name);
      }
      if (person.name.last[0] === "Q") {
        q.push(person.name);
      }
      if (person.name.last[0] === "R") {
        r.push(person.name);
      }
      if (person.name.last[0] === "S") {
        s.push(person.name);
      }
      if (person.name.last[0] === "T") {
        t.push(person.name);
      }
      if (person.name.last[0] === "U") {
        u.push(person.name);
      }
      if (person.name.last[0] === "V") {
        v.push(person.name);
      }
      if (person.name.last[0] === "W") {
        w.push(person.name);
      }
      if (person.name.last[0] === "X") {
        x.push(person.name);
      }
      if (person.name.last[0] === "Y") {
        y.push(person.name);
      }
      if (person.name.last[0] === "Z") {
        z.push(person.name);
      }
    });
    this.setState({
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
            <Letter names={this.state.a} />
            <div>B</div>
            <Letter names={this.state.b} />
          </Tab>
          <Tab eventKey="c-d" title="C-D">
            <div>C</div>
            <Letter names={this.state.c} />
            <div>D</div>
            <Letter names={this.state.d} />
          </Tab>
          <Tab eventKey="e-f" title="E-F">
            <div>E</div>
            <Letter names={this.state.e} />
            <div>F</div>
            <Letter names={this.state.f} />
          </Tab>
          <Tab eventKey="g-h" title="G-H">
            <div>G</div>
            <Letter names={this.state.g} />
            <div>H</div>
            <Letter names={this.state.h} />
          </Tab>
          <Tab eventKey="i-j" title="I-J">
            <div>I</div>
            <Letter names={this.state.i} />
            <div>J</div>
            <Letter names={this.state.j} />
          </Tab>
          <Tab eventKey="k-l" title="K-L">
            <div>K</div>
            <Letter names={this.state.k} />
            <div>L</div>
            <Letter names={this.state.l} />
          </Tab>
          <Tab eventKey="m-n" title="M-N">
            <div>M</div>
            <Letter names={this.state.m} />
            <div>N</div>
            <Letter names={this.state.n} />
          </Tab>
          <Tab eventKey="o-p" title="O-P">
            <div>O</div>
            <Letter names={this.state.o} />
            <div>P</div>
            <Letter names={this.state.p} />
          </Tab>
          <Tab eventKey="q-r" title="Q-R">
            <div>Q</div>
            <Letter names={this.state.q} />
            <div>R</div>
            <Letter names={this.state.r} />
          </Tab>
          <Tab eventKey="s-t" title="S-T">
            <div>S</div>
            <Letter names={this.state.s} />
            <div>T</div>
            <Letter names={this.state.t} />
          </Tab>
          <Tab eventKey="u-v" title="U-V">
            <div>U</div>
            <Letter names={this.state.u} />
            <div>V</div>
            <Letter names={this.state.v} />
          </Tab>
          <Tab eventKey="w-z" title="W-Z">
            <div>W</div>
            <Letter names={this.state.w} />
            <div>X</div>
            <Letter names={this.state.x} />
            <div>Y</div>
            <Letter names={this.state.y} />
            <div>Z</div>
            <Letter names={this.state.z} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default NameTabs;
