module.exports = {
  siteMetadata: {
    siteUrl: "https://akoustos.se/",
    title: "akoustus.web",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        forceFullSync: true,
        accessToken: "OvGzoVW3IB9VV1hslLafLRfZvKzxjS7EXU_lIerBwIA",
        spaceId: "sph5fmntez9o",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
