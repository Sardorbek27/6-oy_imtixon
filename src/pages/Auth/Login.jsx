import React, { useState } from "react";
import styles from "./Login.module.css";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Login() {
  const [data, setData] = useState({ phone_number: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("sign-in failed");
      }
      const responseData = await response.json();
      localStorage.setItem(
        "access_token",
        responseData?.data?.tokens?.accessToken?.token
      );
      localStorage.setItem("userName", responseData?.data?.user?.firstName);
      toast.success("You are logged in successfully!");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles["form-container"]}>
      <div style={{position: 'relative'}}>
        <CiUser style={{position: 'absolute', top: '28px', left: '10px'}}/>
        <input
          type="text"
          name="phoneNumber"
          value={data.phone_number}
          onChange={(e) => setData({ ...data, phone_number: e.target.value })}
          className={styles["input-field"]}
          placeholder="Phone Number"
        />
      </div>
      <div style={{position: 'relative'}}>
        <RiLockPasswordLine style={{position: 'absolute', top: '28px', left: '10px', color: 'gray'}}/>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className={styles["input-field"]}
          placeholder="Password"
        />
      </div>
      <button type="submit" className={styles["submit-btn"]}>
        Log in
      </button>
      
      <Link to={'/logout'}>
      <p className=" mt-2 text-blue-500 text-[14px] font-semibold">Sign up</p>

      </Link>
    </form>
  );
}

export default Login;
