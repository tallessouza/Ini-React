import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Repos from "./Repos";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/repos" component={Repos}/>
      </Switch>
    </BrowserRouter>
  )
}