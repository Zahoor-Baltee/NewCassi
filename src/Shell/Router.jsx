import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Access/Login";
// import DefaultLayout from "../Layout/DefaultLayout";
import NewDefaultLayout from "../Layout/NewDefaultLayout";
import ForgotPassword from "../Access/ForgotPassword";
import Confirmation from "../Access/Confirmation";
import Homepage from "../Pages/Homepage";
import EnterExpenseReport from "../Pages/EnterExpenseReport";
import NewDashboard from "../Pages/NewDashboard";
import TickPlacementBars from "../Pages/Chart";
const WithLayout = ({ component }) => {
  return <NewDefaultLayout>{component}</NewDefaultLayout>;
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
        <Route path="/chart" element={<TickPlacementBars />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
