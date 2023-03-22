import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  InstagramIcon,
  SearchIcon,
} from "../../imports/icons";

const NavBar = ({ user, dispatch }) => {
  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <FacebookIcon
          style={{ marginRight: "1rem" }}
          fontSize="large"
        ></FacebookIcon>
        <TwitterIcon
          style={{ marginRight: "1rem" }}
          fontSize="large"
        ></TwitterIcon>
        <PinterestIcon
          style={{ marginRight: "1rem" }}
          fontSize="large"
        ></PinterestIcon>
        <InstagramIcon
          style={{ marginRight: "1rem" }}
          fontSize="large"
        ></InstagramIcon>
      </div>
      <div className={styles.mid}>
        <ul className={styles.list}>
          <Link className={styles.link} to="/">
            <li>HOME</li>
          </Link>
          <Link className={styles.link} to="#"></Link> <li>ABOUT</li>
          <li>CONTACT</li>
          <Link className={styles.link} to="/createpost">
            <li>WRITE</li>
          </Link>
          {user ? (
            <li
              style={{ fontSize: "1.5rem" }}
              onClick={handleLogOut}
              className={styles.link}
            >
              LOGOUT
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div className={styles.right}>
        {!user ? (
          <span>
            <Link to="/signup" className={styles.link}>
              <span style={{ marginRight: "1rem" }}>Register</span>
            </Link>
            <Link to="/login" className={styles.link}>
              <span>Login</span>
            </Link>
          </span>
        ) : (
          <Link to="/settings">
            {user.ProfilePic ? (
              <img
                className={styles.profile}
                src={user.ProfilePic}
                alt="nothing to preview"
              />
            ) : (
              <span
                style={{ fontSize: "1.5rem", textDecoration: "none" }}
                className={styles.link}
              >
                Settings
              </span>
            )}
          </Link>
        )}

        <SearchIcon fontSize="large"></SearchIcon>
      </div>
    </nav>
  );
};

export default NavBar;
