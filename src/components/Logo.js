import React from "react"
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Logo = () => (
  <StaticQuery
      query={graphql`
        query {
          allImageSharp(filter:{id:{eq:"6f674a63-fcd6-518a-b3b9-99efd7357cef"}}) {
            edges {
              node {
                fixed(width: 175, height: 175) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Link to="/" className="logo" title="Logo">
          <Img fixed={data.allImageSharp.edges[0].node.fixed} />
        </Link>
      )}
    />
)

export default Logo