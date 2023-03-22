import React, { useEffect, useState } from "react";
import styles from "./SinglePostPage.module.css";
import { About, SinglePost } from "../../imports/components";

import { getSinglePost } from "../../lib/Posts";
import { useParams } from "react-router-dom";

const SinglePostPage = () => {
  const { id } = useParams();
  const [post,setPost]=useState([])

  useEffect(() => {
    getSinglePost(id).then((data) => {
      setPost(data)
       
    });
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <SinglePost post={post}></SinglePost>
      </div>
      <div className={styles.right}>
        <About></About>
      </div>
    </section>
  );
};

export default SinglePostPage;
