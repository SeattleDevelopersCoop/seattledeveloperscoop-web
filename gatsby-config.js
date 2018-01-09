// https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/
// https://www.gatsbyjs.org/packages/gatsby-image/
// https://www.gatsbyjs.org/packages/gatsby-link/

// see https://www.gatsbyjs.org/docs/plugins/

module.exports = {
  siteMetadata: {
    title: 'Seattle Developer\'s Cooperative',
    siteUrl: 'https://www.seattledevelopers.coop'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    }
  ],
}
