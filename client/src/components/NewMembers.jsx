import React from "react";
import "../../styles/newMembers.css";

const NewMembers = props => {
  return (
    <div className="newMembersToggle">
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
