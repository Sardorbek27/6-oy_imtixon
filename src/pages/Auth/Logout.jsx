import React, { useState } from "react";
import styles from "./Login.module.css";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [data, setData] = useState({ phone_number: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user credentials to local storage
    localStorage.setItem("phoneNumber", data.phone_number);
    localStorage.setItem("password", data.password);

    // Display success message
    toast.success("You are logged in successfully!");

    // Redirect to home page after a delay
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["form-container"]}>
      <div style={{ position: "relative" }}>
        <CiUser style={{ position: "absolute", top: "28px", left: "10px" }} />
        <input
          type="text"
          name="phoneNumber"
          value={data.phone_number}
          onChange={(e) => setData({ ...data, phone_number: e.target.value })}
          className={styles["input-field"]}
          placeholder="Phone Number"
        />
      </div>
      <div style={{ position: "relative" }}>
        <RiLockPasswordLine
          style={{ position: "absolute", top: "28px", left: "10px", color: "gray" }}
        />
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
        Sign up
      </button>

      {/* Link to sign up page */}
      <Link to="/signup" className="mt-2 text-blue-500 text-[14px] font-semibold">
        Sign in
      </Link>

      {/* Toast container for displaying messages */}
      <ToastContainer />
    </form>
  );
}

export default Login;
