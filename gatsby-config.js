module.exports = {
  pathPrefix: "/BadmintonsBest/",
  siteMetadata: {
    title: `Badmintons Best`,
    author: `Liam Walsh`,
    description: `Learning from the best, realise your true potential 🔥 🏸 💯`,
    siteUrl: `https://www.badmintonsbest.com/`,
    social: {
      instagram: `badmintonsbest`,
      facebook: `BadmintonsBest`,
      twitter: `BadmintonsBest`,
      youtube: `UCszQfT2se87xk2TqrS7xHEQ`,
    },
    contact: {
      email: `info@badmintonsbest.com`,
    },
    menu: [
      {
        text: `Recommended Gear`,
        link: `/recommended-gear/`,
      },
      {
        text: `Beginners Guide`,
        link: `/categories/beginners-info/`,
      },
      {
        text: `The Blog`,
        link: `/blog/`,
      },
      {
        text: `About Us`,
        link: `/about/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/content/assets`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-56G6NL6",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `badmintonsbest`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Badmintons Best`,
        short_name: `BadmintonsBest`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `content/assets/badmintonsbest-logo.jpg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
