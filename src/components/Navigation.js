import React, { Component } from 'react'
import styled, { attrs } from 'styled-components'
import media from '../styles/style-utils'
import Link from 'gatsby-link'

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 3.5em;

  ${media.phone`
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 0em;
  `}

`
const Button = styled.button`
  font-size: 1rem;
  padding: .62em 1em;
  color: ${props => props.color || '#fff'};
  background: transparent; 
  border: 2px solid ${props => props.color || '#fff'};
  cursor: pointer;
  outline: none;

  ${media.phone`
    margin-bottom: 1em;
  `}

  &:hover {
    color: #a51321;
    border-color: #a51321;
  }
`

const Navigation = ({color}) =>
      <Nav>
        <a href="https://dev.to/tiagodcosta"><Button color={color}>articles</Button></a>
        <a href="mailto:tiago@tiagocosta.dev"><Button color={color}>contact</Button></a>
      </Nav>


export default Navigation

