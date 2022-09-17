import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import { LOGIN_ROUTE } from "../../utils/consts";

const NavBar = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <nav className="h-20 text-white italic bg-[#3e7cb6]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link className="m-5 text-2xl font-bold ml-6" to="/">
            ICorb
          </Link>
          {isAuth ? (
            <div className="flex items-center mr-7">
              <Link
                className="rounded-sm bg-[#D9D9D9] bg-opacity-30 px-10 py-2 transition duration-200 hover:bg-[#265b8d]"
                to="/admin"
              >
                Админ панель
              </Link>
              <button className="ml-7">Выйти</button>
              <Link to="/basket" className="ml-7">
                <i className="bi bi-cart4 text-[25px]"></i>
              </Link>
              <Link className="ml-7 " to="/favourite">
                <i className="bi bi-suit-heart-fill text-[25px]"></i>
              </Link>
            </div>
          ) : (
            <div className="flex items-center mr-7">
              <Link
                className="rounded-sm bg-[#D9D9D9] bg-opacity-30 px-10 py-2 transition duration-200 hover:bg-[#265b8d]"
                to={LOGIN_ROUTE}
              >
                Вход / Регистрация
              </Link>
              <Link to="/basket" className="ml-7">
                <i className="bi bi-cart4 text-[25px]"></i>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
