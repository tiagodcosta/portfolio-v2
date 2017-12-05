import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Navigation from '../components/Navigation'


const Projects = ({ data }) => (
  <Container>
    <Content>
      <Navigation color="#000" />
      <Title>Projects</Title>
      <p>I've worked on different types of projects, technologies and concepts including JavaScript, Sass/Less, UX design, Digital Art and data modeling.</p>  
      
      <p>Here are some of my recent ones.</p>
      <List>
        {data.allMarkdownRemark.edges.map(({node, index}) => (
          <ListItem key={index}>
            <ItemTitle>{node.frontmatter.title}</ItemTitle>
            <ItemYear>{node.frontmatter.year}</ItemYear>
            <ItemTags>{node.frontmatter.tags}</ItemTags>
            <ItemText>{node.excerpt}</ItemText>
          </ListItem>
        ) 
        )}
      </List>
    </Content>
  </Container>
)

export default Projects

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #fff; 
  font-family: 'Lato', Verdana, sans-serif;
  color: #000;
`
//Content styles
const Content = styled.section`
  margin-top: 2em;
  max-width: 50%;
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 2rem;
  margin: 2em auto 1em auto;
  color: #4691db;
`
//List
const List = styled.ul`
    list-style: none;
    margin: 0;
    paddding: 0;
`
const ListItem = styled.li`
    margin: 0;
    padding: 0;
`
const ItemTitle = styled.h2`
    font-size: 1.5rem;
    margin: 0;
    margin-top: 1em;
`
const ItemYear = styled.p`
    font-size: 1rem;
    margin: 0;
`
const ItemTags = styled.p`
    font-size: 1rem;
    margin: 0;
`
const ItemText = styled.p`
    font-size: 1rem;
    margin: 0;
`

export const query = graphql`
query ProjectsQuery {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          year
          tags
          link
        }
        excerpt
      }
    }
  }
}
`