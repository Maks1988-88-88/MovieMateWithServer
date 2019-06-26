import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

const Root = () => (
  <BrowserRouter basename="/MovieMateWithServer/build">
    <App />
  </BrowserRouter>
);

export default Root;
