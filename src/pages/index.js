import React from 'react'
import styled from 'styled-components'

import Navigation from '../components/Navigation'

const IndexPage = () => (
  <Container>
    <Content>
      <Title>I am Tiago Costa</Title>
      <Text>UI Developer with background in UX</Text>
      <Navigation color="#fff" />
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
  color: #fff; 
`
//Content styles
const Content = styled.section`
  width: 55%;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`
const Title = styled.h1`
  font-size: 4rem;
  margin: 0 auto;
`
const TitleRed = styled.span`
  color: #a51321;
`
const Text = styled.p`
  font-size: 2rem;
  display: block;
  color: #000;
  margin: 0 auto
`