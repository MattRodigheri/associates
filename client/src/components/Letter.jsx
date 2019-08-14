import React from "react";

class Letter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.names.map((person, index) => {
          let fullName = "";
          for (const key in person.name) {
            fullName += `${person.name[key]} `;
          }
          let degrees = [];
          for (const key in person.years) {
            let degree;
            if (key === "unspecified") {
              degree = "";
            } else {
              degree = key;
            }
            degrees.push(`${degree} ${person.years[key]}`);
          }
          return <div key={index}>{`${fullName} ${degrees.join(", ")}`}</div>;
        })}
      </div>
    );
  }
}

export default Letter;
