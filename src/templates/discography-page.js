import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import SpotifyPlayer from "../components/SpotifyPlayer"

function DiscographyPage({ data }) {

  const post = data.allMarkdownRemark.edges[0].node

  return (
    <Layout>
      <section>
        <div className="flex800 main-content">
          <div className="copy">
            <h1>{post.frontmatter.title}</h1>
            <HTMLContent content={post.html} />
            <div>
              {post.frontmatter.shantymen_albums.map(albumdata => (
                <div>
                <h3 key={albumdata.album_name}>{albumdata.album_name}</h3>
                <h3 key={albumdata.album_year}>{albumdata.album_year}</h3>
                <div><HTMLContent content={albumdata.album_details_track_listing} /></div>
                </div>
              ))}
            </div>
          </div>
          <aside className="aside">
            <SpotifyPlayer />
          </aside>
        </div>
      </section>
    </Layout>
  )
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
          title
        }
        html
      }
    }
  }
}`