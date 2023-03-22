import React, { useEffect, useState } from "react";
import { getCategories } from "../../lib/categories";
import styles from "./About.module.css";

const About = () => {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    getCategories().then((data) => {
      setCat(data);
    });
  }, []);
  return (
    <section className={styles.section} style={{paddingRight:"2rem"}}>
      <span className={styles.titleabout}>About me</span>
      <img
        src="data:image/jpeg;base64,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"
        alt="nothing to preveiw"
      />
      <p className={styles.bodyabout}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita
        consectetur cumque ipsa ut ullam, suscipit iste, repellat ducimus
        sapiente distinctio eum quidem vitae architecto!
      </p>

      <span style={{ marginTop: "1rem" }} className={styles.titleabout}>
        {cat.map((el) => {
          return <span style={{ display: "block" }}>{el.name}</span>;
        })}
      </span>
      {}
    </section>
  );
};

export default About;
