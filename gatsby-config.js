/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  plugins: [
  
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `notes`,
        // Path to the directory
        path: `${__dirname}/src/notes/`,
      },},
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          // The unique name for each instance
          name: `projects`,
          // Path to the directory
          path: `${__dirname}/src/projects/`,
        },},
        // `gatsby-transformer-remark`

        
  ],
  siteMetadata:{
    title:"web Warrior",
    description:"web dev Portfolio",
    copyright:"this website is copyright 2023 web warrior"
  }
}
