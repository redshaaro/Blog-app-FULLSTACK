import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.section}>
        <div className={styles.headertiles}>
        <span className={styles.title1}>SHAAROO</span>
      <span className={styles.title2}>Blog</span>
        </div>
      
      <img
      className={styles.img}
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="nothing to preview"
      />
    </section>
  );
};

export default Header;
