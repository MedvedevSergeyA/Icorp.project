import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRouts, publicRouts } from "../routs";
import { SHOP_ROUTE } from "../utils/consts";

const AppRouter = () => {
    const isAuth = true;
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
