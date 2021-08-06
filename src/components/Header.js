import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import * as styles from "./styles/header.module.css";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPage {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link to="/">AKOUSTOS</Link>
        <div className={styles.menu}>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          {data.allContentfulPage.edges.map((edge) => (
            <Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
