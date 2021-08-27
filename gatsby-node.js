const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve(`src/pages/page-template.js`);
  const articleTemplate = path.resolve(`src/pages/article-template.js`);
  const result = await graphql(`
    query {
      allContentfulPage {
        edges {
          node {
            slug
            title
            content {
              raw
              references {
                ... on ContentfulAsset {
                  contentful_id
                  __typename
                  fixed {
                    width
                    height
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
      allContentfulArticle {
        edges {
          node {
            head
            body {
              raw
              references {
                ... on ContentfulAsset {
                  contentful_id
                  __typename
                  fixed {
                    width
                    height
                    src
                    srcSet
                  }
                }
              }
            }
            id
            author
            subhead
            image {
              file {
                url
                fileName
                details {
                  image {
                    height
                    width
                  }
                  size
                }
              }
            }
          }
        }
      }
    }
  `);
  result.data.allContentfulPage.edges.forEach((edge) => {
    createPage({
      path: `${edge.node.slug}`,
      component: pageTemplate,
      context: edge.node,
    });
  });
  result.data.allContentfulArticle.edges.forEach((edge) => {
    createPage({
      path: `article/${edge.node.id}`,
      component: articleTemplate,
      context: edge.node,
    });
  });
};
