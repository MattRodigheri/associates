import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import sort from "fast-sort";
import NewMembers from "./NewMembers.jsx";
import Letter from "./Letter.jsx";
import "../../styles/nameTabs.css";

class NameTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };

    this.sortNames = this.sortNames.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.sortNames(this.props.names);
  }

  sortNames(names) {
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

    const sortedNames = sort(names).asc([
      person => person.name.last,
      person => person.name.first,
      person => person.name.middle
    ]);

    sortedNames.forEach(person => {
      if (person.name.last[0] === "A") {
        a.push(person);
      }
      if (person.name.last[0] === "B") {
        b.push(person);
      }
      if (person.name.last[0] === "C") {
        c.push(person);
      }
      if (person.name.last[0] === "D") {
        d.push(person);
      }
      if (person.name.last[0] === "E") {
        e.push(person);
      }
      if (person.name.last[0] === "F") {
        f.push(person);
      }
      if (person.name.last[0] === "G") {
        g.push(person);
      }
      if (person.name.last[0] === "H") {
        h.push(person);
      }
      if (person.name.last[0] === "I") {
        i.push(person);
      }
      if (person.name.last[0] === "J") {
        j.push(person);
      }
      if (person.name.last[0] === "K") {
        k.push(person);
      }
      if (person.name.last[0] === "L") {
        l.push(person);
      }
      if (person.name.last[0] === "M") {
        m.push(person);
      }
      if (person.name.last[0] === "N") {
        n.push(person);
      }
      if (person.name.last[0] === "O") {
        o.push(person);
      }
      if (person.name.last[0] === "P") {
        p.push(person);
      }
      if (person.name.last[0] === "Q") {
        q.push(person);
      }
      if (person.name.last[0] === "R") {
        r.push(person);
      }
      if (person.name.last[0] === "S") {
        s.push(person);
      }
      if (person.name.last[0] === "T") {
        t.push(person);
      }
      if (person.name.last[0] === "U") {
        u.push(person);
      }
      if (person.name.last[0] === "V") {
        v.push(person);
      }
      if (person.name.last[0] === "W") {
        w.push(person);
      }
      if (person.name.last[0] === "X") {
        x.push(person);
      }
      if (person.name.last[0] === "Y") {
        y.push(person);
      }
      if (person.name.last[0] === "Z") {
        z.push(person);
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

  handleChange() {
    this.setState({
      checked: !this.state.checked
    });

    if (this.state.checked) {
      let recentlyAdded = [];
      let mostRecent = Math.max.apply(
        Math,
        this.props.names.map(name => {
          return name.yearAdded;
        })
      );

      for (const person in this.props.names) {
        if (this.props.names[person].yearAdded === mostRecent) {
          recentlyAdded.push(this.props.names[person]);
        }
      }

      this.sortNames(recentlyAdded);
    } else {
      this.sortNames(this.props.names);
    }
  }

  render() {
    return (
      <div>
        <NewMembers handleChange={this.handleChange} />
        <Tabs defaultActiveKey="a-b">
          <Tab eventKey="a-b" title="A-B">
            <h5>A</h5>
            <Letter names={this.state.a} />
            <h5>B</h5>
            <Letter names={this.state.b} />
          </Tab>
          <Tab className="tab" eventKey="c-d" title="C-D">
            <h5>C</h5>
            <Letter names={this.state.c} />
            <h5>D</h5>
            <Letter names={this.state.d} />
          </Tab>
          <Tab eventKey="e-f" title="E-F">
            <h5>E</h5>
            <Letter names={this.state.e} />
            <h5>F</h5>
            <Letter names={this.state.f} />
          </Tab>
          <Tab eventKey="g-h" title="G-H">
            <h5>G</h5>
            <Letter names={this.state.g} />
            <h5>H</h5>
            <Letter names={this.state.h} />
          </Tab>
          <Tab eventKey="i-j" title="I-J">
            <h5>I</h5>
            <Letter names={this.state.i} />
            <h5>J</h5>
            <Letter names={this.state.j} />
          </Tab>
          <Tab eventKey="k-l" title="K-L">
            <h5>K</h5>
            <Letter names={this.state.k} />
            <h5>L</h5>
            <Letter names={this.state.l} />
          </Tab>
          <Tab eventKey="m-n" title="M-N">
            <h5>M</h5>
            <Letter names={this.state.m} />
            <h5>N</h5>
            <Letter names={this.state.n} />
          </Tab>
          <Tab eventKey="o-p" title="O-P">
            <h5>O</h5>
            <Letter names={this.state.o} />
            <h5>P</h5>
            <Letter names={this.state.p} />
          </Tab>
          <Tab eventKey="q-r" title="Q-R">
            <h5>Q</h5>
            <Letter names={this.state.q} />
            <h5>R</h5>
            <Letter names={this.state.r} />
          </Tab>
          <Tab eventKey="s-t" title="S-T">
            <h5>S</h5>
            <Letter names={this.state.s} />
            <h5>T</h5>
            <Letter names={this.state.t} />
          </Tab>
          <Tab eventKey="u-v" title="U-V">
            <h5>U</h5>
            <Letter names={this.state.u} />
            <h5>V</h5>
            <Letter names={this.state.v} />
          </Tab>
          <Tab eventKey="w-z" title="W-Z">
            <h5>W</h5>
            <Letter names={this.state.w} />
            <h5>X</h5>
            <Letter names={this.state.x} />
            <h5>Y</h5>
            <Letter names={this.state.y} />
            <h5>Z</h5>
            <Letter names={this.state.z} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default NameTabs;
