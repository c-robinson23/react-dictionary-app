import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  //console.log(props);
  if (props.phonetic) return <div className="Phonetic">/{props.phonetic}/</div>;

  if (props.phonetic.audio)
    return (
      <div className="Phonetic-audio">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </div>
    );
  else {
    return null;
  }
}
