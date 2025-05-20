import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import MobilesPage from "./pages/MobilesPage";
import WishListPage from "./pages/WishListPage";

import ProductDesc from "./pages/ProductDesc";
import CheckOutPage from "./pages/CheckOutPage";
import AppliancePage from "./pages/AppliancesPage";
import TvsPage from "./pages/TvsPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import LaptopPage from "./pages/LaptopPage";
import OrderTracking from "./pages/OrderTracking";
import Returns from "./pages/Returns";
import TermsAndConditionPage from "./pages/TermsAndConditionPage";
import Contact from "./pages/Contact";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import FAQ from "./pages/FAQ";
import productdata from "../src/utility/data.json";
import MainLayout from "./layout/MainLayout";
import ProductProvider from "./services/ProductContextApi";
const App = () => {
  return (
    <div>
      <ProductProvider>
        <Routes>
         
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route element={<MainLayout />}>
            {" "}
            <Route
              path="/home"
              element={<Homepage productdata={productdata} />}
            />
            <Route path="/product" element={<ProductDesc />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/wishlist" element={<WishListPage />} />
            <Route path="/mobile" element={<MobilesPage />} />
            <Route path="/appliancePage" element={<AppliancePage />} />
            <Route path="/tvsPage" element={<TvsPage />} />
            <Route path="/accessoriesPage" element={<AccessoriesPage />} />
            <Route path="/laptoppage" element={<LaptopPage />} />
            <Route path="/OrderTracking" element={<OrderTracking />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/returns" element={<Returns />} />
            <Route
              path="/terms&conditons"
              element={<TermsAndConditionPage />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />{" "}
          </Route>
        
        </Routes>
  </ProductProvider>
    </div>
  );
};

export default App;
