import React from "react";

export default function Antonyms(props) {
  //console.log(props);
  if (props.antonyms) {
    return props.antonyms;
  } else {
    return null;
  }
}
