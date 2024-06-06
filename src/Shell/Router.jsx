import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Access/Login";
import DefaultLayout from "../Layout/DefaultLayout";
import ForgotPassword from "../Access/ForgotPassword";
import Confirmation from "../Access/Confirmation";
const WithLayout = ({ component }) => {
  return <DefaultLayout>{component}</DefaultLayout>;
};
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={<WithLayout component={<Login />} />}
        />
        <Route path="/forgotpassword" element={<DefaultLayout />} />
        <Route path="/confirmation" element={<Confirmation />} />

        <Route path="/productlist" element={<WithLayout component="" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
