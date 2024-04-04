import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  //console.log(props);
  return (
    <div className="Meaning">
      <h5>({props.define.partOfSpeech})</h5>
      <div>
        definition: {props.define.definition}
        <br />
        <br />
        <Synonyms synonyms={props.define.synonyms} />
        <br />
        <Antonyms antonyms={props.define.antonyms} />
        <br />
        <br />
      </div>
    </div>
  );
}
