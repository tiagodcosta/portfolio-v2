import React from 'react'
import styled from 'styled-components'
import media from '../styles/style-utils'
import resume from '../files/costatiago_resume.pdf'

import profilePic from '../files/tiago.png'
import Navigation from '../components/Navigation'

const About = () =>  (
  <Container>
    <Content>
      <Navigation color="#000" />
      <Title>About me</Title>
      <Profile>
        <ProfilePic>
          <Image src={profilePic} alt="tiago" />
        </ProfilePic>
        <ProfileText>
        <Text>Hello there! My name is Tiago. I'm a web engineer, and writer focused on UX and frontend development. Currently, I work on <ProfileLink href="http://www.innerpeacetime.org">Inner Peace Time</ProfileLink>, a project that has the mission of introducing well-being and mindfulness to workplaces.</Text> 
        
        <Text>Before now, I worked for startups in Boston, Innovation Department of Northeastern University, <ProfileLink href="https://wwww.mtv.com">MTV</ProfileLink>, <ProfileLink href="https://www.cnn.com">CNN</ProfileLink>, <ProfileLink href="http://www.oi.com.br">Oi Telecom</ProfileLink>, and <ProfileLink href="http://www.ig.com.br">Internet Group of Brazil</ProfileLink>. I was also a contributor to open source projects like WordPress and Code for America.</Text>

          <Text>I'm certified in Strategy and Innovation at <ProfileLink href="http://www.mit.edu">MIT</ProfileLink> and hold a Master of UX and Web Development from <ProfileLink href="http://www.northeastern.edu">Northeastern University</ProfileLink>, Boston, Massachusetts. </Text>
          <Text></Text>
          <Text>Blog: https://dev.to/tiagodcosta</Text>
          <Text>Contact: tiago@tiagocosta.dev</Text>
          <Text>Github: tiagodcosta </Text>
        </ProfileText>
      </Profile> 
    </Content>
  </Container>
)

export default About

const Profile = styled.div`
  display: flex;
  
  ${media.laptop`
   display: block;
  `}

  ${media.phone`
    display: block;
  `}  

`
const ProfileLink = styled.a`
  text-decoration: none;
  font-weight: 800;
  color: #082440;
`;

const ProfilePic = styled.div`
  flex: 1;
`
const ProfileText = styled.div`
  flex: 3;
  padding-left: 1.5em;

  ${media.phone`
    padding-left: 0;
  `}  
`

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
const Image = styled.img`
  width: 100%;
  margin: 0 auto 1.5em auto;

   ${media.laptop`
    display: none;
   `}

   ${media.phone`
    display: none;
   `}
`
const Title = styled.h1`
  font-size: 2rem;
  margin: 2em auto 1em auto;
  color: #4691db;

  ${media.phone`
    margin: 1em 0;
  `}

`
const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1.2em;
  line-height: 1.5;
  word-break: keep-all;
  text-align: justify;
`