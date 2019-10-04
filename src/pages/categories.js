import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Constrain from "../components/constrain"
import Box from "../components/box"
import RightSideBarLayout from "../components/layouts/right-sidebar-layout"
import MainContent from "../components/layouts/main-content"
import SideBar from "../components/layouts/sidebar"
import ContentHeader from "../components/content-header"
import Adspot from "../components/adspot"

class CategoriesPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const { group } = this.props.data.allMarkdownRemark

    return (
      <Layout location={this.props.location}>
        <SEO title={siteTitle} description={siteDescription} />
        <Constrain>
          <Box>
            <ContentHeader>
              <h1
                style={{
                  marginTop: rhythm(1),
                  marginBottom: 0,
                }}
              >
                Categories
              </h1>
            </ContentHeader>
            <RightSideBarLayout>
              <MainContent>
                <ul>
                  {group.map(tag => (
                    <li key={tag.fieldValue}>
                      <Link to={`/categories/${kebabCase(tag.fieldValue)}/`}>
                        {tag.fieldValue} ({tag.totalCount})
                      </Link>
                    </li>
                  ))}
                </ul>
              </MainContent>
              <SideBar>
                <Adspot slug="sidebar-unit" />
              </SideBar>
            </RightSideBarLayout>
          </Box>
        </Constrain>
      </Layout>
    )
  }
}

export default CategoriesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
