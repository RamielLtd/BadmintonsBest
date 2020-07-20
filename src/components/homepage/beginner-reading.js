import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import FeaturedSection from "src/components/featured-section"

const BeginnerReading = () => {
  const beginnerReadingQuery = useStaticQuery(graphql`
    query beginnerReadingQuery {
      posts: allMdx(
        filter: {
          fields: {
            slug: {
              in: [
                "/blog/badminton-rules/"
                "/blog/badminton-tips-for-beginners/"
                "/blog/how-to-hit-the-sweet-spot-in-badminton/"
              ]
            }
          }
        }
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
              featured {
                childImageSharp {
                  fluid(maxWidth: 700, maxHeight: 500, cropFocus: CENTER) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const beginnerReadingPosts = beginnerReadingQuery.posts.edges

  return (
    <FeaturedSection
      title="Master the basics"
      description="For beginners and anyone wanting to master the fundamentals 🏸✅"
      posts={beginnerReadingPosts}
    />
  )
}

export default BeginnerReading
