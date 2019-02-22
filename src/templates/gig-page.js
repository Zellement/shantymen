import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const GigPageTemplate = ({ data, content, contentComponent }) => {
  //console.log(data)
  const PageContent = contentComponent || Content
    return (
      <section>
        <PageContent content={content} />
      </section>
    )
}

GigPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const GigPage = ({ data }) => {
  return (
    <Layout>
      <GigPageTemplate
        contentComponent={HTMLContent}
        content={data.allMarkdownRemark.edges[0].node.html}
      />

          {data.allMarkdownRemark.edges[0].node.frontmatter.gig_listing.map(gigdata => (
            <div key={gigdata.date + gigdata.time}>
              <h3 key={gigdata.date}>{gigdata.date}</h3>
              <h3 key={gigdata.time}>{gigdata.time}</h3>
              <h3 key={gigdata.location}>{gigdata.location}</h3>
              <div key={gigdata.details}>{gigdata.details}</div>
            </div>
          ))}
    </Layout>
  )
}

GigPageTemplate.propTypes = {
  data: PropTypes.object,
}

export default GigPage

export const GigPageQuery = graphql`
  query 
{
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "gig-page"}}}) {
    edges {
      node {
        html
        id
        frontmatter {
          gig_listing {
            date
            time
            location
            details
          }
        }
      }
    }
  }
}`