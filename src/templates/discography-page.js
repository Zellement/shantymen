import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const DiscographyPageTemplate = ({ data, content, contentComponent }) => {
  //console.log(data)
  const PageContent = contentComponent || Content
    return (
      <section>
        <PageContent content={content} />
      </section>
    )
}

DiscographyPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const DiscographyPage = ({ data }) => {
  return (
    <Layout>
      <DiscographyPageTemplate
        contentComponent={HTMLContent}
        content={data.allMarkdownRemark.edges[0].node.html}
      />

          {data.allMarkdownRemark.edges[0].node.frontmatter.shantymen_albums.map(albumdata => (
            <div>
            <h3>{albumdata.album_name}</h3>
            <h3>{albumdata.album_year}</h3>
            <div>{albumdata.album_details_track_listing}</div>
            </div>
          ))}
    </Layout>
  )
}

DiscographyPageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DiscographyPage

export const DiscographyPageQuery = graphql`
  query 
{
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "discography-page"}}}) {
    edges {
      node {
        frontmatter {
          shantymen_albums {
            album_name
            album_year
            album_details_track_listing
          }
        }
        html
      }
    }
  }
}`