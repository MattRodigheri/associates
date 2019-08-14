import React from "react";

class Letter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.names.map((name, index) => {
          return (
            <div key={index}>{`${name.first} ${name.middle} ${name.last}`}</div>
          );
        })}
      </div>
    );
  }
}

export default Letter;
