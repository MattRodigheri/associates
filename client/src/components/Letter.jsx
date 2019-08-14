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
          for (const key in person) {
            fullName += `${person[key]} `;
          }

          return <div key={index}>{`${fullName}`}</div>;
        })}
      </div>
    );
  }
}

export default Letter;
