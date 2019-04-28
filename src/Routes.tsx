import React from "react";
import { Switch, Route } from "react-router-dom";

import { LogIn } from "./pages/LogIn";
import { Messages } from "./pages/Messages";
import { MessageDetails } from "./pages/MessageDetails";
import { PrivateRoute } from "./components/PrivateRoute";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={LogIn} />
    <PrivateRoute path="/messages" component={Messages} />
    <PrivateRoute path="/messages/:messageId" component={MessageDetails} />
  </Switch>
);
