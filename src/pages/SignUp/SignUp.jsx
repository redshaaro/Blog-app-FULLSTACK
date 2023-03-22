import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";
import { register } from "../../lib/auth";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    register(username, email, password).then((res) => {
      console.log(res);
    });
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
          type="text"
        />
        <input className={styles.btn} type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
