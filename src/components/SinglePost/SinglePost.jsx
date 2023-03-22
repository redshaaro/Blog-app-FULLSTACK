import React, { useContext, useState } from "react";
import styles from "./singlePost.module.css";
import { DeleteIcon, CreateIcon } from "../../imports/icons";
import { Context } from "../../context/Context";
import { deletePost, editPost } from "../../lib/Posts";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SinglePost = ({ post }) => {
  const { user } = useContext(Context);

  const navigate = useNavigate();

  const [change, setChange] = useState(false);
  const [title, setTitle] = useState(post?.Title);

  const handleDelete = () => {
    deletePost(post?._id).then((res) => {
      console.log(res);
    });
    navigate("/");
  };
  const handleUpdate = async () => {
    try {
      editPost(title, post?._id).then((res) => console.log(res));
      setChange(false);
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  };

  const pf = "https://blogapp-api-indol.vercel.app/images";

  return (
    <article className={styles.container}>
      {post?.photo && (
        <img className={styles.img} src={pf + post?.photo} alt="" />
      )}
      {change ? (
        <input
          type="text"
          value={title}
          className={styles.singlePostTitleInput}
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <>
          <div className={styles.title}>
            <span className={styles.mid}>{post?.Title}</span>

            <div className={styles.right}>
              {user?.UserName === post?.username ? (
                <>
                  <CreateIcon
                    style={{ marginRight: "1rem" }}
                    fontSize="large"
                    onClick={() => {
                      setChange(true);
                    }}
                  ></CreateIcon>
                  <DeleteIcon
                    onClick={() => {
                      handleDelete();
                    }}
                    fontSize="large"
                  ></DeleteIcon>
                </>
              ) : (
                "you can only edit your post"
              )}
            </div>
          </div>
        </>
      )}
      <div className={styles.author}>
        <span>{post?.username}</span>
        <span>{post?.createdAt}</span>
      </div>
      <div className={styles.body}>{post?.Desc}</div>
      {change && (
        <button style={{fontSize:"2rem"}} className={styles.singlePostButton} onClick={handleUpdate}>
          Update
        </button>
      )}
    </article>
  );
};

export default SinglePost;
