import React from "react";
import Dictionary from "./Dictionary.js";
import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="App-footer">
          <small>Coded by Candace Robinson</small>
        </footer>
      </div>
    </div>
  );
}
