import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    //console.log(event);
    setKeyword(event.target.value);
  }

  function handleImageResponse(response) {
    //console.log(response);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    //alert(`Searching for the ${keyword} definition...`);

    let apiKey = "8955aec3fa84eee934db0tdod70f6d28";
    //let word = "sunset";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imagesApiKey = "8955aec3fa84eee934db0tdod70f6d28";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(handleImageResponse);
  }

  function handleResponse(response) {
    //console.log(response.data);
    setResults(response.data);
  }

  if (results) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={search}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunset, books, yoga, forest
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    search({ preventDefault: function () {} });
    return "Loading...";
  }
}
