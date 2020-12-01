import * as React from "react";
import { render } from "react-dom";
import App from "./components/app/App";
import { BrowserRouter } from "react-router-dom";

const rootEl = document.getElementById("root");

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootEl,
);
