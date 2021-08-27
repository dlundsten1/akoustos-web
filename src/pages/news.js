import React from "react";
import Layout from "../components/Layout";
import { graphql, Link, useStaticQuery } from "gatsby";
import * as styles from "./news.module.css";
import dateToTimeFromNow from "../utils/dateToTimeFromNow";
// import { StaticImage } from "gatsby-image"

const Article = ({ node }) => {
  return (
    <Link className={styles.articleLink} to={`/article/${node.id}`}>
      <div className={styles.article}>
        <img
          className={styles.image}
          alt="image of the Akoustos screw"
          src={node.image.file.url}
        />
        <div className={styles.details}>
          <h3>{node.head}</h3>
          <p>{node.subhead}</p>

          <div className={styles.divider}></div>
          <div className={styles.footer}>
            {dateToTimeFromNow(new Date(node.createdAt))} • By{" "}
            <span className={styles.name}> {node.author} </span>
          </div>
        </div>
      </div>
    </Link>
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
            head
            subhead
            body {
              raw
            }
          }
        }
      }
    }
  `);

  const articles = data.allContentfulArticle.edges;
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
