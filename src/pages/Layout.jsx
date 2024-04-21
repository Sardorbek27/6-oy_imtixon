import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <div className="main-container">
      <aside>
        <Sidebar />
      </aside>
      <div className="second-container">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
