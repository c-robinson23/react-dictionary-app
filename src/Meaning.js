import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <h3>({props.meaning.partOfSpeech})</h3>
      <div>
        definition: {props.meaning.definition}
        <br />
        example: {props.meaning.example}
        <Synonyms synonyms={props.meaning.synonyms} />
        <Antonyms antonyms={props.meaning.antonyms} />
        <br />
        <br />
      </div>
    </div>
  );
}
