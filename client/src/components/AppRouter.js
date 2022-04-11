import React, { useContext } from "react";
import { Routes, Route, Redirect, Navigate } from "react-router-dom";
import { authRoutes, publickRouters } from "./../routes";
import { Context } from "./../index";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
  const { user } = useContext(Context);
  return (
    <Routes>
      {user.getIsAuth() === true &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} exact />
        ))}
      {publickRouters.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} exact />
      ))}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
});

export default AppRouter;
