import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import AddWindow from "./AddWindow";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/addwindow" component={AddWindow} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
