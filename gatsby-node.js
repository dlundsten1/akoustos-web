const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve(`src/pages/page-template.js`);
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
    }
  `);
  result.data.allContentfulPage.edges.forEach((edge) => {
    createPage({
      path: `${edge.node.slug}`,
      component: pageTemplate,
      context: edge.node,
    });
  });
};
