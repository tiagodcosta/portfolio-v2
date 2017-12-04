import React from 'react'
import Link from 'gatsby-link'

import Navigation from '../components/Navigation'

const About = ({data}) => (
  <div>
    <Navigation color='#000' />
    {data.allMarkdownRemark.edges.map(({node, i}) => (
          <article key={i}>
            <h1>{node.frontmatter.title}</h1>
            <p>{node.excerpt}</p>
          </article>
         )
    )}
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default About

export const query = graphql`
    query AboutQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            excerpt
          }
        }
      }
    } 
`