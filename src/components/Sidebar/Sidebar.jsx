import React from "react";
import { TiHome } from "react-icons/ti";
import { NavLink, useLocation } from "react-router-dom";
import { FaCity } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import { Menu } from "antd";

import "./Sidebar.css";
import { FaShopify } from "react-icons/fa6";
import MenuItem from "antd/es/menu/MenuItem";

const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <Menu
        style={{ width: '256px', borderRight: "1px solid #001f2c" }}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        selectedKeys={[location.pathname]}
      >
        <MenuItem style={{ height: "80px" }}>
          <NavLink to="/">AutozoomAdmin</NavLink>
        </MenuItem>

        <Menu.Item key="/" icon={<TiHome style={{ fontSize: "20px" }} />}>
          <NavLink to="/" rel="noopener noreferrer">
            Dashboard
          </NavLink>
        </Menu.Item>

        <Menu.Item
          key="/brands"
          icon={<FaShopify style={{ fontSize: "20px" }} />}
        >
          <NavLink to="/brands" rel="noopener noreferrer">
            Brands
          </NavLink>
        </Menu.Item>

        <Menu.Item
          key="/cities"
          icon={<FaCity style={{ fontSize: "20px" }} />}
        >
          <NavLink to="/cities" rel="noopener noreferrer">
            Cities
          </NavLink>
        </Menu.Item>

        <Menu.Item
          key="/location"
          icon={<IoLocationSharp style={{ fontSize: "20px" }} />}
        >
          <NavLink to="/location" rel="noopener noreferrer">
            Location
          </NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Sidebar;