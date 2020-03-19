const kebabCase = require(`lodash/kebabCase`)

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.sourceNodes = ({ actions }) => {
  const { createFieldExtension, createTypes } = actions
  createFieldExtension({
    name: "schemaType",
    extend() {
      return {
        resolve: source => source.schemaType || "WebPage",
      }
    },
  })
  createTypes(`
    type Frontmatter @infer {
      featured: File @fileByRelativePath
      schemaType: String @schemaType
    }
    type Mdx implements Node @infer {
      frontmatter: Frontmatter
    }
  `)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const categoryTemplate = path.resolve("src/templates/category.js")
  const result = await graphql(
    `
      {
        allMdx(
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
                type
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

  // Create blog-list pages
  const blogs = result.data.allMdx.edges.filter(
    item => item.node.frontmatter.type === "blog"
  )

  const blogsPerPage = 6
  const numPages = Math.ceil(blogs.length / blogsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      component: path.resolve("./src/templates/blog.js"),
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numPages,
        currentPage: i + 1,
        type: "blog",
      },
    })
  })

  // Create markdown pages.
  const pages = result.data.allMdx.edges

  pages.forEach((page, index) => {
    const previous = index === pages.length - 1 ? null : pages[index + 1].node
    const next = index === 0 ? null : pages[index - 1].node

    createPage({
      path: page.node.fields.slug,
      // Swap template based of field value
      component:
        page.node.frontmatter.type === "blog" ? blogPostTemplate : pageTemplate,
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

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
