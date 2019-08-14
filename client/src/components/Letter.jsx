import React from "react";

const Letter = props => {
  return (
    <div>
      {props.names.map((person, index) => {
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
};

export default Letter;
