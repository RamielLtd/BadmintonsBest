const kebabCase = require(`lodash/kebabCase`)

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const categoryTemplate = path.resolve("src/templates/category.js")
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                categories
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create markdown pages.
  const pages = result.data.allMarkdownRemark.edges

  pages.forEach((page, index) => {
    const previous = index === pages.length - 1 ? null : pages[index + 1].node
    const next = index === 0 ? null : pages[index - 1].node

    createPage({
      path: page.node.fields.slug,
      component: (page.node.frontmatter.type === 'blog') ? blogPostTemplate : pageTemplate,
      context: {
        slug: page.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Create categories page
  let categories = []

  // Iterate through each page, putting all found categories into `categories`
  pages.forEach(page => {
    if (page.node.frontmatter.categories) {
      categories = categories.concat(page.node.frontmatter.categories)
    }
  })

  // Eliminate duplicate categories
  categories = [...new Set(categories)]

  // Make category pages
  categories.forEach(category => {
    createPage({
      path: `/categories/${kebabCase(category)}/`,
      component: categoryTemplate,
      context: {
        category,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
