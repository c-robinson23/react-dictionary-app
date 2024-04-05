import React from "react";
import "./Antonyms.css";

export default function Antonyms(props) {
  //console.log(props);
  if (props.antonyms) {
    return (
      <ul className="Antonyms">
        <span className="title">antonym(s): </span>
        {props.antonyms.map(function (antonym, index) {
          return <li key={index}>{antonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
