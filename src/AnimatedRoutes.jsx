import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Auth/Login";
import Layout from "./Layout/Layout";
import ProtectedRoutes from "./ProtectedRoutes";
import ProductPage from "./Product-page/ProductPageView";
import Categories from "./categories/Categories";
import SingleProduct from "./Single-product/SingleProduct";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  const checkTheSessionStorageForToken = () => {
    if (true) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location}>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route
              path="/home/dashboard"
              element={
                <ProtectedRoutes isLoggedIn={checkTheSessionStorageForToken()}>
                  <ProductPage />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/:categories"
              element={
                <ProtectedRoutes isLoggedIn={checkTheSessionStorageForToken()}>
                  <Categories />
                </ProtectedRoutes>
              }
            />
            <Route
              path="product/:id"
              element={
                <ProtectedRoutes isLoggedIn={checkTheSessionStorageForToken()}>
                  <SingleProduct />
                </ProtectedRoutes>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;
