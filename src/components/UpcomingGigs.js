import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
	<StaticQuery
	    query={graphql`
        query 
        {
          allMarkdownRemark(
            limit: 3
            filter: {frontmatter: {templateKey: {eq: "gig-listing"}}}
            ) {
            edges {
              node {
                html
                id
                frontmatter {
                  location
                  date
                  details
                }
              }
            }
          }
        }
	    `}
	    render={data => (
          <div>
            {data.allMarkdownRemark.edges.map(gigdata => (
              <div key={gigdata.node.frontmatter.location + gigdata.node.frontmatter.date}>
                <h3 key={gigdata.node.frontmatter.location}>{gigdata.node.frontmatter.location}</h3>
                <h3 key={gigdata.node.frontmatter.date}>{gigdata.node.frontmatter.date}</h3>
              </div>
            ))}
          </div>
	    )}
	  />
)