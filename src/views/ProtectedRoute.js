import React from "react";
import { Route, Redirect, Navigate } from "react-router-dom";

const ProtectedRoute = ({
  isAuth,
  children,
  // element: Component,
  // render,
  // ...rest
}) => {
  return isAuth ? children : <Navigate to="/" />;
  // return (
  //   <Route
  //     path={path}
  //     {...rest}
  //     render={(props) => {
  //       if (isAuth) {
  //         return <Component {...props} />;
  //       } else {
  //         return (
  //           <Redirect to={{ pathname: "/", state: { from: props.location } }} />
  //         );
  //       }
  //     }}
  //   />
  // );
};

export default ProtectedRoute;
