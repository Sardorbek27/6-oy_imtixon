import React from "react";
import { TiHome } from "react-icons/ti";
import { NavLink, useLocation } from "react-router-dom";
import { FaCity } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { BsBank } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { FaChartBar } from "react-icons/fa";

import logo from '../../image/b04a9bd139fa644ac1f73366a8088a58.png'

import { Menu } from "antd";

import "./Sidebar.css";
import { FaShopify } from "react-icons/fa6";
import MenuItem from "antd/es/menu/MenuItem";

const Sidebar = () => {
  const location = useLocation();

  return (

      <Menu
        style={{ width: '241px', borderRight: "1px solid #001f2c" }}
        defaultOpenKeys={["sub1"]}
        mode="horizantal"
        theme="dark"
        selectedKeys={[location.pathname]}
      >
        <MenuItem style={{}}>
          <NavLink to="/">
            <div className="logo_content flex items-center flex-col">
              <img className="text-center" style={{width: 65, height: 65, borderRadius: '50%'}} src={logo} alt="logo" />
              <p>Udemy Inter. school</p>
            </div>
          </NavLink>
        </MenuItem>

        <Menu.Item key="/dashboard" icon={<TiHome style={{ fontSize: "20px", border: "none" }} />}>
          <NavLink to="/" rel="noopener noreferrer">
            Dashboard
          </NavLink>
        </Menu.Item>

        <Menu.Item
          key="/cities"
          icon={<FaCity style={{ fontSize: "20px" }} />}
          >
          <NavLink to="/cities" rel="noopener noreferrer">
            Teachers
          </NavLink>
        </Menu.Item>

        <Menu.Item
          key="/students"
          icon={<PiStudent style={{ fontSize: "20px" }} />}
        >
          <NavLink to="/students" rel="noopener noreferrer">
            Students
          </NavLink>
        </Menu.Item>


        <Menu.Item
          key="/billing"
          icon={<BsBank style={{ fontSize: "20px" }} />}
        >
          <NavLink to="/billing" rel="noopener noreferrer">
            Billing
          </NavLink>
        </Menu.Item>

        <Menu.Item
          key="/sittings"
          icon={<IoSettingsOutline style={{ fontSize: "20px" }} />}
        >
          <NavLink to="/sittings" rel="noopener noreferrer">
            Sittings
          </NavLink>
        </Menu.Item>

        <Menu.Item
          key="/exams"
          icon={<FaChartBar style={{ fontSize: "20px" }} />}
        >
          <NavLink to="/exams" rel="noopener noreferrer">
            Exams
          </NavLink>
        </Menu.Item>

      </Menu>
  );
};

export default Sidebar;
