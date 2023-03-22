import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";

import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { login } from "../../lib/auth";

const Login = () => {
  const { dispatch,isFetching } = useContext(Context);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      login(username, password).then((res) => {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
      });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILED" });
    }
  };

  return (
    <div className={styles.container}>
      <Link className={styles.link} to="/signup">
        <span>SignUp</span>
      </Link>

      <span className={styles.title}>Login</span>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>UserName</label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          className={styles.text}
          type="text"
          placeholder="eg.zeyadelshaarawy"
        />
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className={styles.text}
          type="text"
        />
        <input className={styles.btn} type="submit" disabled={isFetching} />
      </form>
    </div>
  );
};

export default Login;
