import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Excerpt from "../excerpt"
import { RelatedContentFactory } from "./related-content-factory"
import { rhythm } from "../../utils/typography"
import { BREAKPOINTS } from "../../constants/css-vars"

const RelatedContentContainer = styled("section")``

const ExcerptsContainer = styled("div")`
  @media ${BREAKPOINTS.SMALL} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: -${rhythm(1)};

    & > * {
      flex: 1 1 50%;
      margin: 0 !important;
      padding-left: ${rhythm(1)};
    }
  }
`

const RelatedContent = ({ articles }) => (
  <RelatedContentContainer>
    <h3
      style={{
        marginTop: 0,
      }}
    >
      Related Content
    </h3>
    <ExcerptsContainer>
      {articles.map((article, i) => (
        <Excerpt
          type="blog"
          node={article.article.node}
          variant="mini"
          key={i}
        />
      ))}
    </ExcerptsContainer>
  </RelatedContentContainer>
)

// (1.) Query for articles
export default props => (
  <StaticQuery
    query={graphql`
      query RelatedContent {
        posts: allMdx(
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
                featured {
                  childImageSharp {
                    fluid(maxWidth: 700, maxHeight: 465, cropFocus: CENTER) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { currentArticleSlug, categories = [], tags = [] } = props

      // (2.) Marshall the response into articles
      const articles = data.posts

      // (3.) Use a RelatedContentFactory to get my similar articles
      const relatedContent = new RelatedContentFactory(
        articles,
        currentArticleSlug
      )
        .setMaxArticles(2)
        .setCategories(categories)
        .setTags(tags)
        .getArticles()

      // (4.) Render it
      return <RelatedContent articles={relatedContent} />
    }}
  />
)
