import React from "react";
import Layout from "../components/Layout";
import { graphql, Link, useStaticQuery } from "gatsby";
import * as styles from "./news.module.css";
// import { StaticImage } from "gatsby-image"

const Article = ({ node }) => {
  return (
    <div className={styles.article}>
      <div></div>
      <img
        className={styles.image}
        alt="image of the Akoustos screw"
        src={node.image.file.url}
      />
      <div className={styles.details}>
        <h3>{node.title}</h3>
        <p>{node.content.raw}</p>

        <div className={styles.divider}></div>
        <div className={styles.footer}>
          {node.createdAt} • By{" "}
          <span className={styles.name}> {node.author} </span>
        </div>
      </div>
    </div>
  );
};
const News = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulArticle {
        edges {
          node {
            id
            createdAt
            contentful_id
            children {
              id
            }
            author
            image {
              file {
                url
              }
            }
            title
            content {
              raw
            }
          }
        }
      }
    }
  `);

  const articles = data.allContentfulArticle.edges;
  console.log(articles);
  return (
    <Layout onRoot={false}>
      <h1>News</h1>
      <div className={styles.news}>
        {articles.map((article) => {
          return <Article node={article.node} />;
        })}
      </div>
    </Layout>
  );
};

export default News;
