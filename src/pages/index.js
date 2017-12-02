import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'


const Navigation = () => 
  <Nav>
    <Link to="/about/"><Button>About</Button></Link>
    <Link to="/projects/"><Button>Projects</Button></Link>
    <Link to="/contact/"><Button>Contact</Button></Link>
  </Nav>


const IndexPage = () => (
  <Container>
    <Content>
      <Title>I am Tiago Costa</Title>
      <Text>UI Developer with background in UX</Text>
      <Navigation />
    </Content>
  </Container>
)

export default IndexPage

//Container styles
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(40deg, #4691db, #1976D2); 
  font-family: 'Lato', Verdana, sans-serif; 
`
//Content styles
const Content = styled.section`
  max-width: 50%;
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 4rem;
`
const Text = styled.p`
  font-size: 2rem;
  display: block;
  color: #fff;
`


//Navigation styles
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2em;
`
const Button = styled.button`
  color: #fff;
  background: #e62739; 
  border: 0; 
`