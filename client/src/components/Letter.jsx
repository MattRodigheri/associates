import React from "react";

class Letter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.names.map((person, index) => {
          let fullName = "";
          for (const key in person.name) {
            fullName += `${person.name[key]} `;
          }
          let degrees = "";
          for (const key in person.years) {
            degrees += `${key} ${person.years[key]} `;
          }
          return <div key={index}>{`${fullName} ${degrees}`}</div>;
        })}
      </div>
    );
  }
}

export default Letter;
