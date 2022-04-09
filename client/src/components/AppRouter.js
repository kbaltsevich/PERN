import React, { useContext } from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import { authRoutes, publickRouters } from "./../routes";
import { Context } from "./../index";

const AppRouter = () => {
  const { user } = useContext(Context);
  return (
    <Routes>
      {user.isAuth === true &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} exact />
        ))}
      {publickRouters.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} exact />
      ))}
    </Routes>
  );
};

export default AppRouter;
