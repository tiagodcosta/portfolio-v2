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
          <Text>Hi! I'm Tiago Costa. I'm a Front End Developer based in Boston, MA.</Text>
          <Text>Currently, I work as  Front End Developer at FUNDopolis, where I have the opportunity to combine my previous technical experience with my knowledge of User Experience (UX).</Text>
          <Text>I love to code and put the user first on a project. I am constantly in contact with new concepts, technologies, and other professionals. I always attend hackathons and meetups in the Boston Area, where I always chat with talented people.</Text>
          <Text>I enjoy playing guitar and cooking. I played in bands when I was a teenager. On the weekends, I often cook a barbecue or try a new recipe with my friends.</Text>
          <a href={resume}><Text>Check my complete resume</Text></a> 
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