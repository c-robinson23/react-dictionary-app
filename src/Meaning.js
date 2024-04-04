import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  //console.log(props);
  return (
    <div className="Meaning">
      <h4>({props.define.partOfSpeech})</h4>
      <div>
        {props.define.definition}
        <br />
        <Synonyms synonyms={props.define.synonyms} />
        <br />
        antonyms: {props.define.antonyms}
        <br />
        <br />
      </div>
    </div>
  );
}
