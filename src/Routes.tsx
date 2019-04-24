import React from "react";
import { Switch, Route } from "react-router-dom";

import { LogIn } from "./pages/LogIn";

export const Routes = () => (
  <Switch>
    <Route path="/" component={LogIn} />
  </Switch>
);
