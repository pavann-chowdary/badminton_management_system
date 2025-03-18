import React from "react";
import { Routes, Route } from "react-router-dom";
import OrderConfirmationpage from "./OrderConfirmationpage";
import Orderpage from "./Orderpage";
import Profile from "./Profile"

export default function AppRoutes () {
  return (
    <Routes>
      <Route
        path="/welcome"
        element={
          <Profile/>
        }
      />
      {/* <Route path="/confirm" element={<OrderConfirmationpage />} /> */}
    </Routes>
  );
};
