import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const StandardPageTemplate = ({ title, content, contentComponent, mainimage }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <div className="flex800 main-content">
        <div className="copy">
          <h1>{title}</h1>
          <PageContent className="content" content={content} />
        </div>
        <aside className="aside">
          <Img fluid={mainimage} />
        </aside>
      </div>
    </section>
  )
}

StandardPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const StandardPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <StandardPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        mainimage={post.frontmatter.image.childImageSharp.fluid}
      />
    </Layout>
  )
}

StandardPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default StandardPage

export const StandardPageQuery = graphql`
  query StandardPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }

`
