import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import SpotifyPlayer from "../components/SpotifyPlayer"

export const DiscographyPageTemplate = ({ data, content, contentComponent, title }) => {
  //console.log(data)
  const PageContent = contentComponent || Content
    return (
    <section>
      <div className="flex800 main-content">
        <div className="copy">
          <h1>{title}</h1>
          <PageContent className="content" content={content} />
        </div>
        <aside className="aside">
          <SpotifyPlayer />
        </aside>
      </div>
    </section>
    )
}

/*DiscographyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}*/

const DiscographyPage = ({ data }) => {
  return (
    <Layout>
      <DiscographyPageTemplate
        contentComponent={HTMLContent}
        title={data.allMarkdownRemark.edges[0].node.title}
        content={data.allMarkdownRemark.edges[0].node.frontmatter.title}
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

/*DiscographyPageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}*/

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
          title
        }
        html
      }
    }
  }
}`