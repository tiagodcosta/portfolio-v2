import React, { Component } from 'react'
import styled, { attrs } from 'styled-components'
import Link from 'gatsby-link'

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2em;
`
const Button = styled.button`
  padding: .62em 1em;
  color: ${props => props.color || '#fff'};
  background: transparent; 
  border: 2px solid ${props => props.color || '#fff'};
  cursor: pointer;
  outline: none;

  &:hover {
    color: #a51321;
    border-color: #a51321;
  }
`

const Navigation = ({color}) =>
      <Nav>
        <Link to="/about/"><Button color={color}>Read about me</Button></Link>
        <Link to="/projects/"><Button color={color}>View my projects</Button></Link>
        <Link to="/contact/"><Button color={color}>Contact me</Button></Link>
      </Nav>


export default Navigation

