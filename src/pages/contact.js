import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Navigation from '../components/Navigation'

const Contact = () =>  (
  <Container>
    <Content>
      <Navigation color="#000" />
      <Title>Contact me</Title>
      <p>Feel free to contact me. I'll answer as soon as possible ;-)</p>
      <p><a href="mailto:tiago@tiagocosta.co">tiago@tiagocosta.co</a></p>
    </Content>
  </Container>
)

export default Contact

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
  width: 50%;
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 2rem;
  margin: 2em auto 1em auto;
  color: #4691db;
`