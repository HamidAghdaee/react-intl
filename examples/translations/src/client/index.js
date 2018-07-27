import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import LanguageProvider from "./components/LanguageProvider";

ReactDOM.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
  document.getElementById("container")
);
