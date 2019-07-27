import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  const Posts = data.allContentfulBlog.edges
    .map(edge => <div key={edge.node.id}>
        <h3>{edge.node.title}</h3>
      </div>
    )
  return <Layout>
          <SEO title="Home" />
          <h1>Contentful + Gatsby Static Sight Demo</h1>
          <p>Live previews of your static site for content editors</p>
          {Posts}
        </Layout>
}

export const query = graphql`
  query HomePageQuery {
    allContentfulBlog {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`

export default IndexPage
