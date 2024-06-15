import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Access/Login";
import DefaultLayout from "../Layout/DefaultLayout";
import ForgotPassword from "../Access/ForgotPassword";
import Confirmation from "../Access/Confirmation";
import Homepage from "../Pages/Homepage";
import EnterExpenseReport from "../Pages/EnterExpenseReport";
import NewDashboard from "../Pages/NewDashboard";
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
          element={<WithLayout component={<NewDashboard />} />}
        // element={<WithLayout component={<Homepage />} />}
        />
        <Route
          path="/enterexpensereport"
          element={<WithLayout component={<EnterExpenseReport />} />}
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/confirmation" element={<Confirmation />} />

        <Route path="/productlist" element={<WithLayout component="" />} />
        <Route path="/newdashboard" element={<NewDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
