import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import AuthContextProvider from "./contexts/authContext";

const app = (
  <AuthContextProvider>
    <App />
  </AuthContextProvider>

);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
