import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App container">
      <div>
        <Weather />
        <footer className="text-center">
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
            href="https://github.com/aimen114/black-weather-app.git"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          , and Hosted on{" "}
          <a
            href="https://effulgent-cuchufli-6a84ab.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
