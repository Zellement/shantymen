import React from "react"

import { StaticQuery, graphql } from "gatsby"
import "../content/spotify.md";

export default SpotifyPlayer () => (
  <StaticQuery
    query={graphql`
      query SpotifyPlayerQuery {
        allMarkdownRemark(filter: {frontmatter: {title: {eq: "Spotify"}}}) {
		    edges {
		      node {
		        frontmatter {
		        	title
		        }
		      }
		    }
		  }
      }
    `}
    render={data => (
      <div>
        {data.allMarkdownRemark.edges[0].node.frontmatter.title}
      <div>
    )}
  />
)