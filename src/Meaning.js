import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  //console.log(props);
  return (
    <div className="Meaning">
      <h4>({props.define.partOfSpeech})</h4>
      <div>
        definition: {props.define.definition}
        <br />
        synonym(s): <Synonyms synonyms={props.define.synonyms} />
        <br />
        antonym(s): <Antonyms antonyms={props.define.antonyms} />
        <br />
        <br />
      </div>
    </div>
  );
}
