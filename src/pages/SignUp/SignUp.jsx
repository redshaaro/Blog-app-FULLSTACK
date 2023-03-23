import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../lib/auth";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState(false);
  const [email, setEmail] = useState("");
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password && email && password.length >= 8) {
      register(username, email, password).then((res) => {
        console.log(res);
        nav("/login");
      });
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <Link className={styles.link} to="/login">
        <span>Login</span>
      </Link>
      <span className={styles.title}>Register</span>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>UserName</label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          className={styles.text}
          type="text"
          placeholder="eg.zeyadelshaarawy"
        />
        <label>email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className={styles.text}
          type="text"
        />
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className={styles.text}
          type="password"
        />
        <input className={styles.btn} type="submit" />
      </form>
      {err && (
        <p style={{ fontSize: "2rem", marginTop: "1rem" }}>
          Don't submit an empty form and make sure password is 8 characters min
        </p>
      )}
    </div>
  );
};

export default SignUp;
