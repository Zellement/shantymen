import React from "react"
import { StaticQuery, graphql } from "gatsby"

const GigsAll = () => (
	<StaticQuery
	    query={graphql`
        query 
        {
          allMarkdownRemark(
          sort: {
            fields: [frontmatter___date]
            order: ASC
          }
            filter: {frontmatter: {templateKey: {eq: "gig-listing"}}}
            ) {
            edges {
              node {
                html
                id
                frontmatter {
                  location
                  date
                  datetime
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
              <div key={gigdata.node.frontmatter.location + gigdata.node.frontmatter.datetime}>
                <h3 key={gigdata.node.frontmatter.datetime}>{gigdata.node.frontmatter.datetime}</h3>
                <h4 key={gigdata.node.frontmatter.location}>{gigdata.node.frontmatter.location}</h4>
              </div>
            ))}
          </div>
	    )}
	  />
)

export default GigsAll