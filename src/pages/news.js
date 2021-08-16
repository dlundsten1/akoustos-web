import React from "react";
import Layout from "../components/Layout";
import * as styles from "./news.module.css";
// import { StaticImage } from "gatsby-image"

const home = () => {
  return (
    <Layout onRoot={false}>
      <h1>News</h1>
      <div className={styles.news}>
        <div className={styles.article}>
          <div></div>
          <img
            className={styles.image}
            alt="image of the Akoustos screw"
            src={`screwfinger.webp`}
          />
          <div className={styles.details}>
            <h3>
              The London based startup attracted Fortune 500 companies with
              their new website on Webflow
            </h3>
            <p>
              Fanbytes need a new website that reflects their new branding and
              expanding services about influencer marketing. They also want to
              update their product pages, publish new case studies and blog
              posts regularly. I redesigned their website, customized Webflow
              CMS by considering their needs and finally they got an easy to use
              website on Webflow.
            </p>

            <div className={styles.divider}></div>
            <div className={styles.footer}>
              May 2020 • By <span className={styles.name}> Håkan </span>
            </div>
          </div>
        </div>
        <div className={styles.article}>
          <div></div>
          <img
            className={styles.image}
            alt="image of the Akoustos screw"
            src={`screwfinger.webp`}
          />
          <div className={styles.details}>
            <h3>
              The London based startup attracted Fortune 500 companies with
              their new website on Webflow
            </h3>
            <p>
              Fanbytes need a new website that reflects their new branding and
              expanding services about influencer marketing. They also want to
              update their product pages, publish new case studies and blog
              posts regularly. I redesigned their website, customized Webflow
              CMS by considering their needs and finally they got an easy to use
              website on Webflow.
            </p>

            <div className={styles.divider}></div>
            <div className={styles.footer}>
              May 2020 • By <span className={styles.name}> Håkan </span>
            </div>
          </div>
        </div>
        <div className={styles.article}>
          <div></div>
          <img
            className={styles.image}
            alt="image of the Akoustos screw"
            src={`screwfinger.webp`}
          />
          <div className={styles.details}>
            <h3>
              The London based startup attracted Fortune 500 companies with
              their new website on Webflow
            </h3>
            <p>
              Fanbytes need a new website that reflects their new branding and
              expanding services about influencer marketing. They also want to
              update their product pages, publish new case studies and blog
              posts regularly. I redesigned their website, customized Webflow
              CMS by considering their needs and finally they got an easy to use
              website on Webflow.
            </p>

            <div className={styles.divider}></div>
            <div className={styles.footer}>
              May 2020 • By <span className={styles.name}> Håkan </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default home;
