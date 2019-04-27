import React, { FunctionComponent, Component } from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";

import { isAuthenticated } from "../../libs/auth";

export const PrivateRoute: FunctionComponent<RouteProps> = ({component, ...rest}) => (
  <Route
    {...rest}
    render={
      props =>
        isAuthenticated() ?
        <Component {...props} /> :
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
    }
  />
);
