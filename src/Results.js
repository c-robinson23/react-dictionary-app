import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  //console.log(props.results[0].definition);

  if (props.results) {
    return (
      <div className="Results">
        {props.results.map(function (results, index) {
          return (
            <div key={index}>
              <Meaning define={results} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
