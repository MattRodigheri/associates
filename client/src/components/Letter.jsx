import React from "react";

const Letter = props => {
  return (
    <div>
      {props.names.map((person, index) => {
        let fullName = "";
        let middleName = "";
        if (person.fields.name.middle !== undefined) {
          middleName = person.fields.name.middle;
        }
        fullName += `${person.fields.name.first} ${middleName} ${
          person.fields.name.last
        }`;
        let degrees = [];
        for (const key in person.fields.years) {
          let degree;
          degree = person.fields.years[key];
          degrees.push(`${degree}`);
        }
        return <div key={index}>{`${fullName} ${degrees.join(", ")}`}</div>;
      })}
    </div>
  );
};

export default Letter;
