import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import { useSelector } from "react-redux";
import AuthLinks from "./NavbarItems/authLinks";
import NotAuthLinks from "./NavbarItems/notAuthLinks";

const NavBar = () => {
  const { entities, totalPrice } = useSelector((state) => state.basket);
  const { isAuth } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full">
      <div className="items-center justify-between md:flex dark:bg-gradient-to-r dark:from-blue-900 dark:to-[#1f1461] text-white italic bg-gradient-to-r from-sky-500 to-indigo-500 py-4 md:px-10 px-7">
        <div>
          <Link className="m-5 text-2xl font-bold mx-auto" to="/">
            ICorb
          </Link>
        </div>
        {isAuth ? (
          <AuthLinks
            setOpen={setOpen}
            open={open}
            entities={entities}
            totalPrice={totalPrice}
          />
        ) : (
          <NotAuthLinks
            setOpen={setOpen}
            open={open}
            entities={entities}
            totalPrice={totalPrice}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
