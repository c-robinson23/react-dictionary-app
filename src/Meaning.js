import React from "react";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <h4>({props.define.partOfSpeech})</h4>
      <p>
        {props.define.definition}
        <br />
        synonyms: {props.define.synonyms}
        <br />
        antonyms: {props.define.antonyms}
      </p>
    </div>
  );
}
