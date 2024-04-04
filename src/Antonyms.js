import React from "react";

export default function Antonyms(props) {
  //console.log(props);
  if (props.antonyms) {
    return (
      <ul className="Antonyms">
        antonym(s):{" "}
        {props.antonyms.map(function (antonym, index) {
          return <li key={index}>{antonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
