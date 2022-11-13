import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/appRouter/AppRouter";
import NavBar from "./components/ui/NavBar";
import { AuthContext } from "./context";
import AppLoader from "./components/common/hoc/AppLoader";
import SideBarBasket from "./components/common/sideBarBasket/sideBarBasket";
import { useSelector } from "react-redux";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { isOpen } = useSelector((store) => store.sidebar);
  return (
    <AppLoader>
      <AuthContext.Provider
        value={{
          isAuth,
          setIsAuth
        }}
      >
        <BrowserRouter>
          {isOpen ? <SideBarBasket /> : null}
          <NavBar />
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </AppLoader>
  );
};

export default App;
