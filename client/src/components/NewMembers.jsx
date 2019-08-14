import React from "react";

class NewMembers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="newMembers"
          value="true"
          onChange={this.props.handleChange}
        />
        View Only New Members
      </div>
    );
  }
}

export default NewMembers;
