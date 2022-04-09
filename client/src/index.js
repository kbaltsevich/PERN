import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import UserStore from "./store/UserStore";
import RequestsStore from "./store/RequestsStore";

export const Context = createContext(null);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider
      value={{ user: new UserStore(), reqestsUser: new RequestsStore() }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
