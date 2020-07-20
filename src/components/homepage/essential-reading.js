import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import FeaturedSection from "src/components/featured-section"

const EssentialReading = () => {
  const essentialReadingQuery = useStaticQuery(graphql`
    query essentialReadingQuery {
      posts: allMdx(
        filter: {
          fields: {
            slug: {
              in: [
                "/blog/badminton-drills-at-home/"
                "/blog/badminton-tips/"
                "/blog/skills-you-need-to-play-badminton/"
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
  const essentialReadingPosts = essentialReadingQuery.posts.edges

  return (
    <FeaturedSection
      title="Essential Reading"
      description="Badminton content everyone should read 😉"
      posts={essentialReadingPosts}
    />
  )
}

export default EssentialReading
