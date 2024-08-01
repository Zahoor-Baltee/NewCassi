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
import DashboardUsingGrid from "../Pages/DashboardUsingGrid";
import TickPlacementBars from "../Pages/Chart";
import User from "../Pages/User";
import UserInformation from "../Pages/UserInformation";
import ExpenseReportTable from '../Componenets/ExpenseReportTable';
import ExpenseReports from "../Pages/ExpenseReports";
import ActivityReport from "../Pages/ActivityReport";

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
          // element={<WithLayout component={<NewDashboard />} />}
          // element={<WithLayout component={<Homepage />} />}
          element={<WithLayout component={<DashboardUsingGrid />} />}
        />
        <Route
          path="/enterexpensereport"
          element={<WithLayout component={<EnterExpenseReport />} />}
        />
        <Route
          path="/user"
          element={<WithLayout component={<User />} />}
        />
        <Route
          path="/userinformation"
          element={<WithLayout component={<UserInformation />} />}
        />
        <Route
          path="/expensereporttable"
          element={<WithLayout component={<ExpenseReportTable />} />}
        />
        <Route
          path="/expensereports"
          element={<WithLayout component={<ExpenseReports />} />}
        />
        <Route
          path="/activityreport"
          element={<WithLayout component={<ActivityReport />} />}
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
