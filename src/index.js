import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { AlertState } from "./contex/alert/AlertState";
import { GithubState } from "./contex/github/GithubState";

const app = (
  <GithubState>
    <AlertState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AlertState>
  </GithubState>
);

const root = createRoot(document.getElementById("root"));
root.render(app);
