import React from "react"
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Logo = () => (
  <StaticQuery
      query={graphql`
      {
        allFile(filter:{extension:{eq: "png"}}) {
          edges {
            node {
              childImageSharp {
                id
                fixed(width: 150, height: 150) {
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
            <Img fixed={data.allFile.edges[1].node.childImageSharp.fixed} />
        </Link>
      )}
    />
)

export default Logo