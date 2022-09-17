import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRouts, publicRouts } from "../routs";
import { SHOP_ROUTE } from "../utils/consts";
import { AuthContext } from "../context";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <Switch>
      {isAuth &&
        authRouts.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRouts.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={SHOP_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
