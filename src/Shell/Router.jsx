import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Access/Login";
import DefaultLayout from "../Layout/DefaultLayout";
import NewDefaultLayout from "../Layout/NewDefaultLayout";
import ForgotPassword from "../Access/ForgotPassword";
import Confirmation from "../Access/Confirmation";
import Homepage from "../Pages/Homepage";
import EnterExpenseReport from "../Pages/Expense Reports/EnterExpenseReport";
import NewDashboard from "../Pages/Dashboard/NewDashboard";
import DashboardUsingGrid from "../Pages/Dashboard/DashboardUsingGrid";
import TickPlacementBars from "../Componenets/Chart";
import User from "../Pages/User/User";
import UserInformation from "../Pages/User/UserInformation";
import ExpenseReportTable from '../Componenets/ExpenseReportTable';
import ExpenseReports from "../Pages/Expense Reports/ExpenseReports";
import ActivityReport from "../Pages/Activity Report/ActivityReport";
import AddActivity from "../Pages/ActivityReports/AddActivity"
import ReportsAndExport from "../Pages/Reports And Exports/ReportsAndExport";
import AdvancedSettingAndManagement from "../Pages/Advanced Setting And Management/AdvancedSettingAndManagement";
import Notification from "../Pages/Notification/Notifications";

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
        <Route
          path="/reportsandexport"
          element={<WithLayout component={<ReportsAndExport />} />}
        />
        <Route
          path="/advancesetting"
          element={<WithLayout component={<AdvancedSettingAndManagement />} />}
        />
         <Route
          path="/notify"
          element={<WithLayout component={<Notification />} />}
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/confirmation" element={<Confirmation />} />

        <Route path="/productlist" element={<WithLayout component="" />} />
        <Route path="/dashboardusinggrid" element={<DashboardUsingGrid />} />
        <Route path="/chart" element={<TickPlacementBars />} />
        <Route path="activityreports" element={<WithLayout component={<AddActivity />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
