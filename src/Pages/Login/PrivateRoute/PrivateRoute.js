import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { users, isLoading } = useAuth();
  console.log(isLoading);
  if (isLoading) {
    return <Spinner className="mt-5" animation="border" variant="danger" />;
    console.log(1);
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        users.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
