import React from "react";
import Country from "./Country";
import App from "../App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function Main() {
  return (
    <>


      <Router>


        <Switch>
          <Route path="/" strict exact component={App} />
          <Route path="/read" strict exact component={Country} />
        </Switch>

      </Router>
    </>
  );
}

export default Main;