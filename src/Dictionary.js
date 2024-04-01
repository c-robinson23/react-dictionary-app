import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");

  function handleKeywordChange(event) {
    //console.log(event);
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    //alert(`Searching for the ${keyword} definition...`);

    let apiKey = "8955aec3fa84eee934db0tdod70f6d28";
    //let word = "sunset";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data.meanings[0]);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
