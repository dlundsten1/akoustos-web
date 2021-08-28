import React from "react";
import Layout from "../components/Layout";
import * as styles from "./home.module.css";
// import { StaticImage } from "gatsby-image"

const home = () => {
  return (
    <>
    <head>
      <title>Home</title>
      <meta charset="UTF-8"/>
      <meta name="description" content="Akoustos, the sound absorbing screw" />
      <meta name="keywords" content="Screw, Sound, Absorbing, Akoustos"/>
      <meta name="author" content="David Lundsten"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    
    <Layout onRoot={true}>
      <div className={styles.wrapper}>
        <div style={{ margin: "auto" }}>
          <h1 className={styles.header}>
            The revolutionary sound absorbing screw
          </h1>
        </div>
        {/* <img
          className={styles.image}
          height="500"
          alt="image of the Akoustos screw"
          src={`screws.png`}
        /> */}
      </div>
    </Layout>
    </>
  );
};

export default home;
