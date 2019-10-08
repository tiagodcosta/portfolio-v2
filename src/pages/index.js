import React from 'react'
import styled from 'styled-components'
import media from '../styles/style-utils'
import Navigation from '../components/Navigation'

const IndexPage = () => (
  <Container>
    <Content>
      <Title>tiago costa</Title>
      <Text>ux designer - frontend engineer</Text>
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

  ${media.laptop`
    width: 70%;
    text-align: center;
  `}

  ${media.phone`
    width: 100%;
    padding: 0 1em;
    text-align: right;
  `}

`
const Title = styled.h1`
  font-size: 4rem;
  margin: 0 auto;

  ${media.laptop`
    font-size: 3.5rem;
    margin: 0;
  `}

  ${media.phone`
    font-size: 3rem;
    margin: 0;
  `}

`
const Text = styled.p`
  font-size: 2rem;
  display: block;
  color: #000;
  margin: 0 auto;

  ${media.laptop`
    font-size: 1.5rem;
    margin: 0;
  `}
  
  ${media.phone`
    font-size: 1.5rem;
    margin: 0;
  `} 
`