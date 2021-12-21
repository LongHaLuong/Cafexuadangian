import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import React from "react";
import { useEffect, useState } from "react";
import Main from "./components/Main.js";

const HomePage = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Main/>
        </Route>
      </Switch>
    </Router>
  );
};

export default HomePage;