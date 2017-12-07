import React from 'react'
import styled from 'styled-components'
import media from '../styles/style-utils'
import Navigation from '../components/Navigation'


const Projects = ({ data }) => (
  <Container>
    <Content>
      <Navigation color="#000" />
      <Title>Projects</Title>
      <Text>I've worked on different types of projects, technologies and concepts including JavaScript, Sass/Less, UX design, Digital Art and gaming.</Text>  
      
      <Text>Here are some of my recent ones.</Text>
      <List>
        {data.allMarkdownRemark.edges.map(({node}, index) => (
          <ListItem key={index}>
            <ItemTitle><Link href={node.frontmatter.link}>{node.frontmatter.title}</Link></ItemTitle>
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
  width: 50%;
  display: flex;
  flex-direction: column;

  ${media.laptop`
    width: 65%;
  `}
  
  ${media.phone`
    width: 100%;
    padding: 0 1em;
  `}

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
    margin-bottom: 2em;
    paddding: 0;
`
const ListItem = styled.li`
    margin: 0;
    padding: 0;
    line-height: 1.5;
`
const ItemTitle = styled.h2`
    font-size: 1.5rem;
    margin: 0;
    margin-top: 1.2em;
`
const ItemYear = styled.p`
    font-size: 1rem;
    font-style: italic;
    margin: 0;
    margin-top: .62em;
`
const ItemTags = styled.p`
    font-size: 1rem;
    margin: 0;
    font-style: italic;
`
const ItemText = styled.p`
    font-size: 1rem;
    margin: 0;
    margin-top: .62em;
`
const Link = styled.a`
    color: #000;

    &:hover {
      color: #a51321;
    }
    &:visited {
      color: #808080;
    }

`
const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1.2em;
  line-height: 1.5;
  word-break: keep-all;
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