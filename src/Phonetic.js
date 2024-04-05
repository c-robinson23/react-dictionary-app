import React from "react";

export default function Phonetic(props) {
  console.log(props);
  if (props.phonetic)
    return (
      <ul className="Phonetic">
        phonetic(s): <li>{props.phonetic}</li>
      </ul>
    );
  else {
    return null;
  }
}
