
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./components/Navigation";
import Carts from "./components/Cart";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
// import LoginFormPage from "./components/LoginFormPage";
// import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const showCart = useSelector(state => state.cartUi.cartIsVisible);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {showCart && <Carts />}
      {isLoaded && (
        <>
          <HomePage />
          <About />
          <Menu />
          <Reviews />
        </>
      )}
    </>
  );
}

export default App;
