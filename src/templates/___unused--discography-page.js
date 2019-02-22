import React from 'react'
//import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
//import { TrackListing } from '../components/TrackListing'
//import Content, { HTMLContent } from '../components/Content'

const DiscographyPage = ({ data }) => {
  console.log(data)
    return (
      <Layout>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {/* This takes the data from the query below, goes through the tree (including the first and only edge, and output the title */}
                  {data.allMarkdownRemark.edges[0].node.frontmatter.title}
                </h2>
                  {/* This needs to be done via the Content component */}
                <div>{data.allMarkdownRemark.edges[0].node.html}</div>

                  {/* This loops and maps through all the album_listing array, and outputs them all */}
                  {data.allMarkdownRemark.edges[0].node.frontmatter.shantymen_albums.map(albumdata => (
                    <div>
                    <h3 className="title is-size-4 has-text-weight-bold is-bold-light">{albumdata.album_name}</h3>
                    <h3 className="title is-size-5 has-text-weight-bold is-bold-light">{albumdata.album_year}</h3>
                  {/* This needs to be done via the Content component */}
                    <div>{albumdata.album_details_track_listing}</div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
}

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

export default DiscographyPage