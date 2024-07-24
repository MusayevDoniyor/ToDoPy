import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserProvider from "./context/UserContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </UserProvider>
  </React.StrictMode>
);
