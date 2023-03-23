import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";

import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { login } from "../../lib/auth";

const Login = () => {
  const { dispatch, isFetching } = useContext(Context);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch({ type: "LOGIN_START" });
      try {
        login(username, password).then((res) => {
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
        });
      } catch (err) {
        dispatch({ type: "LOGIN_FAILED" });
      }
    } else {
      setError(true);
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
      {err && (
        <p style={{ fontSize: "2rem", marginTop: "1rem" }}>
          Don't submit an empty form and check your credentials
        </p>
      )}
    </div>
  );
};

export default Login;
