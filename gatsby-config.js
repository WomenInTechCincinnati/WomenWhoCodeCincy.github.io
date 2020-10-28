module.exports = {
  siteMetadata: {
    title: `Women Who Code`,
    subTitle: `Cincinnati`,
    description: `Women Who Code is a non-profit organization dedicated to inspiring women to excel in technology careers.`,
    author: `@CincyWWCode`,
    menuLinks:  [{
      name: `Members`,
      link: `/members`
    },{
      name: `Quotes`,
      link: `/quotes`
    },{
      name: `Resources`,
      link: `/resources`
    },{
      name: `Contact`,
      link: `/contact`
    },]
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/WWC_black.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
