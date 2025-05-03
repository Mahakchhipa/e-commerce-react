import React from "react";

import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import WishList from "./assets/components/WishList";
import MobilesPage from "./pages/MobilesPage";
import WishListPage from "./pages/WishListPage";

const App = () => {
  return (
    <div>
      <Homepage />
      <LoginPage/>
      <SignupPage/>
       <WishListPage/>
      <MobilesPage/>
    </div>
  );
};

export default App;
