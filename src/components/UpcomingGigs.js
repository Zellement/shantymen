import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
	<StaticQuery
	    query={graphql`
        query 
        {
          allMarkdownRemark(
            filter: {frontmatter: {templateKey: {eq: "gig-page"}}}
            ) {
            edges {
              node {
                html
                id
                frontmatter {
                  gig_listing {
                    date
                    time
                    location
                    details
                  }
                }
              }
            }
          }
        }
	    `}
	    render={data => (
	        <div>
            {data.allMarkdownRemark.edges[0].node.frontmatter.gig_listing.map(gigdata => (
              <div key={gigdata.date + gigdata.time}>
                <h3 key={gigdata.date}>{gigdata.date}</h3>
                <h3 key={gigdata.time}>{gigdata.time}</h3>
                <h3 key={gigdata.location}>{gigdata.location}</h3>
                <div key={gigdata.details}>{gigdata.details}</div>
              </div>
            ))}
          </div>
	    )}
	  />
)