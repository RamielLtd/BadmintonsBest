import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import { getPostsFromQuery } from "../../utils/blog"
import Excerpt from "../excerpt"
import { RelatedContentFactory } from "./related-content-factory"

const RelatedContent = ({ articles }) => (
  <section className="similar-articles">
    {articles.map((article, i) => (
      <Excerpt type="blog" node={article.article.node} key={i} />
    ))}
  </section>
)

// (1.) Query for articles
export default props => (
  <StaticQuery
    query={graphql`
      query RelatedContent {
        posts: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { type: { eq: "blog" } } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                categories
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { currentArticleSlug, tags } = props

      // (2.) Marshall the response into articles
      const articles = data.posts

      // (3.) Use a RelatedContentFactory to get my similar articles
      const relatedContent = new RelatedContentFactory(
        articles,
        currentArticleSlug
      )
        .setMaxArticles(4)
        // .setCategory(category)
        .setTags(tags)
        .getArticles()

      // (4.) Render it
      return <RelatedContent articles={relatedContent} />
    }}
  />
)
