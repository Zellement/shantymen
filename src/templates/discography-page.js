import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { TrackListing } from '../components/TrackListing'
import Content, { HTMLContent } from '../components/Content'

export const DiscographyPageTemplate = ({ title, content, contentComponent }) => {
	const PageContent = contentComponent || Content
	//const DiscographyContent = trackListingComponent || DiscographyContent

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              {/* <DiscographyContent className="discographyContent" content={discography} /> */}
              <TrackListing albumTitle={"Somealbum"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const DiscographyPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <DiscographyPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        trackListing={post.frontmatter.album_listing.cd_title}
      />
    </Layout>
  )
}

export default DiscographyPage

export const DiscographyPageQuery = graphql`
  query DiscographyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        templateKey
        date
        description
        album_listing {
          album {
          cd_title
          details_track_listing
          year
          }
        }
      }
    }
  }
`
