import React from "react"
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Logo = () => (
  <StaticQuery
      query={graphql`
      {
        allFile(filter:{id:{eq: "f5d3a3b6-81d7-54d2-96e6-2999ed2301b3"}}) {
          edges {
            node {
              childImageSharp {
                fixed(width: 175, height: 175) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        }
      }
      `}
      render={data => (
        <Link to="/" className="logo" title="Logo">
            <Img fixed={data.allFile.edges[0].node.childImageSharp.fixed} />
        </Link>
      )}
    />
)

export default Logo