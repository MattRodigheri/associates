import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import sort from "fast-sort";

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
      name => name.last,
      name => name.first,
      name => name.middle
    ]);
    sortedNames.forEach((name, index) => {
      if (name.last[0] === "A") {
        a.push(name);
      }
      if (name.last[0] === "B") {
        b.push(name);
      }
      if (name.last[0] === "C") {
        c.push(name);
      }
      if (name.last[0] === "D") {
        d.push(name);
      }
      if (name.last[0] === "E") {
        e.push(name);
      }
      if (name.last[0] === "F") {
        f.push(name);
      }
      if (name.last[0] === "G") {
        g.push(name);
      }
      if (name.last[0] === "H") {
        h.push(name);
      }
      if (name.last[0] === "I") {
        i.push(name);
      }
      if (name.last[0] === "J") {
        j.push(name);
      }
      if (name.last[0] === "K") {
        k.push(name);
      }
      if (name.last[0] === "L") {
        l.push(name);
      }
      if (name.last[0] === "M") {
        m.push(name);
      }
      if (name.last[0] === "N") {
        n.push(name);
      }
      if (name.last[0] === "O") {
        o.push(name);
      }
      if (name.last[0] === "P") {
        p.push(name);
      }
      if (name.last[0] === "Q") {
        q.push(name);
      }
      if (name.last[0] === "R") {
        r.push(name);
      }
      if (name.last[0] === "S") {
        s.push(name);
      }
      if (name.last[0] === "T") {
        t.push(name);
      }
      if (name.last[0] === "U") {
        u.push(name);
      }
      if (name.last[0] === "V") {
        v.push(name);
      }
      if (name.last[0] === "W") {
        w.push(name);
      }
      if (name.last[0] === "X") {
        x.push(name);
      }
      if (name.last[0] === "Y") {
        y.push(name);
      }
      if (name.last[0] === "Z") {
        z.push(name);
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
            {this.state.a.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
            <div>B</div>
            {this.state.b.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
          </Tab>
          <Tab eventKey="c-d" title="C-D">
            <div>C</div>
            {this.state.c.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
            <div>D</div>
            {this.state.d.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
          </Tab>
          <Tab eventKey="e-f" title="E-F">
            <div>E</div>
            {this.state.e.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
            <div>F</div>
            {this.state.f.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
          </Tab>
          <Tab eventKey="g-h" title="G-H">
            <div>G</div>
            {this.state.g.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
            <div>H</div>
            {this.state.h.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
          </Tab>
          <Tab eventKey="i-j" title="I-J">
            <div>I</div>
            {this.state.i.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
            <div>J</div>
            {this.state.j.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
          </Tab>
          <Tab eventKey="k-l" title="K-L">
            <div>K</div>
            {this.state.k.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
            <div>L</div>
            {this.state.l.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
          </Tab>
          <Tab eventKey="m-n" title="M-N">
            <div>M</div>
            {this.state.m.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
            <div>N</div>
            {this.state.n.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
          </Tab>
          <Tab eventKey="o-p" title="O-P">
            <div>O</div>
            {this.state.o.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
            <div>P</div>
            {this.state.p.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
          </Tab>
          <Tab eventKey="q-r" title="Q-R">
            <div>Q</div>
            {this.state.q.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
            <div>R</div>
            {this.state.r.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
          </Tab>
          <Tab eventKey="s-t" title="S-T">
            <div>S</div>
            {this.state.s.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
            <div>T</div>
            {this.state.t.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
          </Tab>
          <Tab eventKey="u-v" title="U-V">
            <div>U</div>
            {this.state.u.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
            <div>V</div>
            {this.state.v.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
          </Tab>
          <Tab eventKey="w-z" title="W-Z">
            <div>W</div>
            {this.state.w.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
            <div>X</div>
            {this.state.x.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
            <div>Y</div>
            {this.state.y.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
            <div>Z</div>
            {this.state.z.map((name, index) => {
              return (
                <div key={index}>{`${name.first} ${name.middle} ${
                  name.last
                }`}</div>
              );
            })}
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default NameTabs;
