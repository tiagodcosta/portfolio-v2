import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Navigation from '../components/Navigation'

const About = () =>  (
  <Container>
    <Content>
      <Navigation color="#000" />
      <h1>About me</h1>
      <p>Hi! I'm Tiago Costa. I'm a Web Developer based in Boston. </p>
      <p>Currently I work as UI Developer at Northeastern University and Boston Dhammakaya Foundation, where I have the opportunity to combine my previous technical experience with my knowledge of User Experience (UX).</p>
      <p>I love to code and put the user first in a project. I am in constantly contact with new concepts, technologies and other developers. I always attend hackathons and meetups in the Boston Area, where I always chat with talent people.</p>
      <p>I enjoy playing guitar and cooking. I played in bands when I was a teenager. At the weekends, I always cook a barbecue or try a new recipe with my friends.</p>
      <Link to="../files/costatiago_resume.pdf"><p>Check my complete resume</p></Link>
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
`
//Content styles
const Content = styled.section`
  max-width: 50%;
  display: flex;
  flex-direction: column;
`