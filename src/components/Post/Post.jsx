import React from "react";

import styles from "./Post.module.css";

const Post = ({ title, category, date, body, img }) => {
  const pf = "https://blogapp-api-indol.vercel.app/images";

  return (
    <div className={styles.cardContainer}>
      {img && <img className={styles.img} src={pf+img} alt="" />}
      <span className={styles.cat}>{category ? category : ""}</span>

      <span className={styles.title}>{title ? title : ""}</span>
      <span className={styles.date}>{date ? date : ""}</span>
      <p className={styles.body}>{body ? body : ""}</p>
    </div>
  );
};

export default Post;
