import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../Access/Login';
import DefaultLayout from '../Layout/DefaultLayout';
import Employee from '../Pages/Employee/Employee';
import AddEmployee from '../Componenets/AddEmployee';
const WithLayout = ({component}) => {
  return <DefaultLayout>
    {component}
  </DefaultLayout>
}
const Router = () => {

  return (
    <BrowserRouter>
       <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/emplyee" element={<WithLayout component={<Employee/>} />} />
      <Route path="/productlist" element={<WithLayout component='' />} />
      <Route path="/addemployee" element={<WithLayout component={<AddEmployee/>} />} />
    </Routes>
    </BrowserRouter>
  );
}

export default Router