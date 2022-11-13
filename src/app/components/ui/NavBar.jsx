import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import { LOGIN_ROUTE } from "../../utils/consts";
import { useDispatch, useSelector } from "react-redux";
import { sideBarOpen } from "../../store/sideBar";

const NavBar = () => {
  const dispatch = useDispatch();
  const { entities, totalPrice } = useSelector((state) => state.basket);
  const { isAuth } = useContext(AuthContext);
  return (
    <nav className="h-20 text-white italic bg-[#3e7cb6]">
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
            <div
              className="bg-[#D9D9D9] bg-opacity-25 p-2 rounded-[10px] ml-[55px]"
              role="button"
              onClick={() => dispatch(sideBarOpen())}
            >
              <span className="border-r-[1px] pr-2">{totalPrice} ₽</span>
              <i className="bi bi-cart4 text-[25px] text-[18px] pl-2"></i>
              <span className="ml-2">{entities.length}</span>
            </div>
            <Link className="flex sm:px-10 sm:py-2" to={LOGIN_ROUTE}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
              <p className="ml-2">Войти</p>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
