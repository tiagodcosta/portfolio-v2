module.exports = {
  siteMetadata: {
    title: `Tiago Costa's portoflio`,
  },
  plugins: [`gatsby-plugin-react-helmet`, 
            `gatsby-plugin-styled-components`,
            `gatsby-transformer-remark`,
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `src`,
                path: `${__dirname}/src/`,
              },
            },
          ]
}
