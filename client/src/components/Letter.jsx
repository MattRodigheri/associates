import React from "react";
import "../../styles/letter.css";

const Letter = props => {
  return (
    <div>
      {props.names.map((person, index) => {
        let fullName = "";
        let middleName = "";
        if (person.name.middle !== undefined) {
          middleName = person.name.middle;
        }
        fullName += `${person.name.first} ${middleName} ${person.name.last}`;
        let degrees = [];
        for (const key in person.years) {
          let degree;
          degree = person.years[key];
          degrees.push(`${degree}`);
        }
        return (
          <div key={index}>
            <div className="name">{`${fullName}`}</div>
            <div className="degrees">{`${degrees.join(", ")}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Letter;
