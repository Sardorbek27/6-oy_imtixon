import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../pages/Error/Error";
import Dashborad from "../pages/Dashboard/Dashborad";
import Login from "../pages/Auth/Login";
import Brand from "../pages/Brand/Brand";
import Cities from "../pages/Cities/Cities";
import Billing from "../pages/Billing/Billing";
import Sittings from "../pages/Sittings/Sittings";
import Exam from "../pages/Exams/Exam";
import Students from "../pages/Students/Students";
import Logout from "../pages/Auth/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashborad />,
      },
      {
        path: "/brands",
        element: <Brand />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/billing",
        element: <Billing />,
      },
      {
        path: "/students",
        element: <Students />,
      },
      {
        path: "/sittings",
        element: < Sittings/>,
      },
      {
        path: "/exams",
        element: < Exam/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

export default router;
