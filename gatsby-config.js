module.exports = {
  siteMetadata: {
    title: `Tiago Costa - Frontend/UX Engineer`,
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
            {
              resolve: `gatsby-plugin-google-analytics`,
              options: {
                trackingId: "UA-96777137-1",
              },
            },
          ]
}
