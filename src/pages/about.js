import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Navigation from '../components/Navigation'

const About = () =>  (
  <Container>
    <Content>
      <Navigation color="#000" />
      <h1>About me</h1>
      <p>Hi! My name is Tiago. I'm a web developer based in Boston. </p>
    </Content>
  </Container>
)

export default About

//Container styles
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  height: 100vh;
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