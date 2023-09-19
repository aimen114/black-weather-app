import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <Weather />
      </div>
      <footer>
        Project Created by{" "}
        <a
          href="https://unrivaled-gingersnap-27115c.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Aimen Zafar
        </a>
        , Open sourced on{" "}
        <a
          href="https://unrivaled-gingersnap-27115c.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        , and Hosted on{" "}
        <a
          href="https://unrivaled-gingersnap-27115c.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}
