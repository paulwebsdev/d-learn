import { Routes, Route } from "react-router-dom";

import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

import MainLayout from "../layouts/MainLayout";
import ForgotPassword from "../pages/auth/ForgotPassword";
import NotFound from "../pages/public/NotFound";


function AppRoutes() {

  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

<Route path="*" element={<NotFound />} />
      </Route>

      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
      

    </Routes>
  );
}

export default AppRoutes;