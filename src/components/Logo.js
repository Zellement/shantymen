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
                id
                fixed(width: 140, height: 140) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Link to="/" className="logo" title="Logo">
          {data.allImageSharp.edges.map(logodata => (
            <Img key={logodata.node.id} fixed={logodata.node.fixed} />
          ))}
        </Link>
      )}
    />
)

export default Logo