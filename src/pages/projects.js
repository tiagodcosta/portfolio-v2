import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Navigation from '../components/Navigation'


const Projects = ({ data }) => (
  <Container>
    <Content>
      <Navigation color="#000" />
      <h1>Projects:</h1>
      <p>I've worked on different types of projects, technologies and concepts including JavaScript, Sass/Less, UX design, Digital Art and data modeling.  
      
      Here are some of my recent ones.</p>
      <List>
        {data.allMarkdownRemark.edges.map(({node, index}) => (
          <li key={index}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
            <p>{node.frontmatter.tags}</p>
            <p>{node.excerpt}</p>
          </li>
        ) 
        )}
      </List>
    </Content>
  </Container>
)

export default Projects

//Container styles
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  background: linear-gradient(40deg, #4691db, #1976D2); 
  font-family: 'Lato', Verdana, sans-serif;
  color: #fff; 
`
//Content styles
const Content = styled.section`
  max-width: 50%;
  display: flex;
  flex-direction: column;
`
//List
const List = styled.ul`
    list-style: none;
`
export const query = graphql`
query ListQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date
          tags
          link
        }
        excerpt
      }
    }
  }
} 
`