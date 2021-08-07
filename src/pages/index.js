import React from "react";
import Layout from "../components/Layout";
import * as styles from "./home.module.css";
// import { StaticImage } from "gatsby-image"

const home = () => {
  return (
    <Layout onRoot={true}>
      <div className={styles.wrapper}>
        <div style={{ margin: "auto" }}>
          <h1 className={styles.header}>
            The revolutionary sound absorbing screw
          </h1>
        </div>
        <img
          className={styles.image}
          height="500"
          alt="image of the Akoustos screw"
          src={`screws.png`}
        />
      </div>
    </Layout>
  );
};

export default home;
