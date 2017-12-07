import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from '../styles/style-utils'
import Navigation from '../components/Navigation'

const Contact = () =>  (
  <Container>
    <Content>
      <Navigation color="#000" />
      <Title>Contact me</Title>
      <Text>Feel free to contact me. I'll answer as soon as possible ;-)</Text>
      <Text><a href="mailto:tiago@tiagocosta.co">tiago@tiagocosta.co</a></Text>
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
const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1.2em;
  line-height: 1.5;
  word-break: keep-all;
`