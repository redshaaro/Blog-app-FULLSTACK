import { useState, useEffect } from "react";
import { getPosts } from "../../lib/Posts";
import { Header, Post, About } from "../../imports/components";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <Header></Header>
      <div className={styles.container}>
        <div className={styles.left}>
          {posts.map((el) => {
            return (
              <Link className={styles.link} to={`/post/${el._id}`}>
                <Post
                  title={el.Title}
                  date={el.createdAt}
                  body={el.Desc}
                  img={el.photo}
                ></Post>
              </Link>
            );
          })}
        </div>
        <div className={styles.right}>
          <About></About>
        </div>
      </div>
    </>
  );
};

export default Home;
