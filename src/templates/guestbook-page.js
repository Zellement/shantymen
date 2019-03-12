import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import SpotifyPlayer from "../components/SpotifyPlayer"
import AlbumListing from "../components/AlbumListing"
import Disqus from 'disqus-react'

function GuestbookPage({ data }) {

  const post = data.allMarkdownRemark.edges[0].node

  return (
    <Layout>
      <section>
        <div className="flex800 main-content">
          <div className="copy">
            <h1>{post.frontmatter.title}</h1>
            <HTMLContent content={post.html} />
            <AlbumListing />
          </div>
          <aside className="aside">
            <SpotifyPlayer />
          </aside>
        </div>
      </section>
    </Layout>
  )
}

export default GuestbookPage

export const GuestbookPageQuery = graphql`
  query 
{
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "guestbook-page"}}}) {
    edges {
      node {
        frontmatter {
          title
        }
        html
      }
    }
  }
}`