import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
//import { TrackListing } from '../components/TrackListing'
//import Content, { HTMLContent } from '../components/Content'

class DiscographyContent extends React.Component {
  render (){
    return (
      <Layout>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                    hi
                  </h2>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default DiscographyContent

export const DiscographyPageQuery = graphql`
  query DiscographyPage 
    {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "discography-page"}}}) {
        edges {
          node {
            frontmatter {
              title
              album_listing {
                album {
                  cd_title
                  details_track_listing
                }
              }
            }
            html
          }
        }
      }
    }
    
`
