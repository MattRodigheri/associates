import React from "react";

const NewMembers = props => {
  return (
    <div>
      <input
        type="checkbox"
        name="newMembers"
        value="true"
        onChange={props.handleChange}
      />
      View Only New Members
    </div>
  );
};

export default NewMembers;
