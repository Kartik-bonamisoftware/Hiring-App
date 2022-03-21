import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import ProtectedRoute from "./views/ProtectedRoute";
import Registration from "./views/Registration";

const Root = () => {
  const [isAuth, setIsAuth] = useState(false);
  const isLoggedIn = () => {
    setIsAuth(!isAuth);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/dash"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Dashboard />{" "}
            </ProtectedRoute>
          }
        />
        {/* <Route exact path="/header" element={<Header />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
