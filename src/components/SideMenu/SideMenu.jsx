import React from "react";
import styles from "./SideMenu.module.css";
import { Link } from "react-router-dom";

const SideMenu = ({ user, open,dispatch }) => {
  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div
      style={open ? { display: "block" } : { display: "none" }}
      className={styles.menu}
    >
      <ul className={styles.list}>
        <Link className={styles.link} to="/">
          <li>HOME</li>
        </Link>
        <Link className={styles.link} to="#">
          <li>ABOUT</li>
        </Link>
        <li>CONTACT</li>
        <Link className={styles.link} to="/createpost">
          <li>WRITE</li>
        </Link>
        <Link className={styles.link} to="/settings">
          <li>SETTINGS</li>
        </Link>
        {user ? (
          <li onClick={handleLogOut} className={styles.link}>
            LOGOUT
          </li>
        ) : (
          <div>
            <Link to="/signup" className={styles.link}>
              <li>Register</li>
            </Link>
            <Link to="/login" className={styles.link}>
              <li>Login</li>
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
};

export default SideMenu;
