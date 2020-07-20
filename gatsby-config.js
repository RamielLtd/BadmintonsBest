module.exports = {
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
    `gatsby-plugin-root-import`,
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
        path: `${__dirname}/src/pages`,
        name: `srcPages`,
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
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
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    `gatsby-plugin-svgr`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-56G6NL6",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

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
    `gatsby-plugin-feed-mdx`,
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [
          `/categories`,
          `/categories/*`,
          `/blog`,
          `/blog/page/*`,
          `/tools/*`,
        ],
      },
    },
  ],
}
