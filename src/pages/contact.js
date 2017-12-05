import React from 'react'
import Link from 'gatsby-link'

import Navigation from '../components/Navigation'

const Contact = () => (
  <div>
    <Navigation color="#000" />
    <h1>Hi from the Contact page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Contact
