import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="header" >
    <div>
      <h1>asdf
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
