import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Navigation from '../components/Navigation'
import resume from '../files/costatiago_resume.pdf'

const About = () =>  (
  <Container>
    <Content>
      <Navigation color="#000" />
      <Title>About me</Title>
      <p>Hi! I'm Tiago Costa. I'm a Web Developer based in Boston. </p>
      <p>Currently I work as UI Developer at Northeastern University and Boston Dhammakaya Foundation, where I have the opportunity to combine my previous technical experience with my knowledge of User Experience (UX).</p>
      <p>I love to code and put the user first in a project. I am constantly in contact with new concepts, technologies and other professionals. I always attend hackathons and meetups in the Boston Area, where I always chat with talented people.</p>
      <p>I enjoy playing guitar and cooking. I played in bands when I was a teenager. At the weekends, I always cook a barbecue or try a new recipe with my friends.</p>
      <Link to={resume}><p>Check my complete resume</p></Link>
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
  background: #fff; 
  font-family: 'Lato', Verdana, sans-serif;
  color: #000; 
  overflow: hidden;
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