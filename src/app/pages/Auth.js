import React from "react";
import LoginForm from "../components/ui/loginForm";
import { useLocation, NavLink } from "react-router-dom";
import { Card } from "flowbite-react";
import RegisterForm from "../components/ui/registerForm";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <div>
      <div className="h-24 mt-[5rem] max-w-lg m-auto">
        {isLogin ? (
          <Card>
            <h3 className="m-auto text-3xl pb-3">Авторизация</h3>
            <LoginForm />
            <p>
              Нет аккаунта?
              <NavLink
                to={REGISTRATION_ROUTE}
                role="button"
                className="ml-2 hover:underline text-blue-900"
              >
                Зарегистрироваться
              </NavLink>
            </p>
          </Card>
        ) : (
          <Card>
            <h3 className="m-auto text-3xl pb-3">Регистрация</h3>
            <RegisterForm />
            <p>
              Уже есть аккаунт?
              <NavLink
                to={LOGIN_ROUTE}
                role="button"
                className="ml-2 hover:underline text-blue-900"
              >
                Войти
              </NavLink>
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Auth;
