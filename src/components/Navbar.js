import React from 'react'
import {Link,graphql,useStaticQuery } from 'gatsby'

function Navbar() {
  const data=useStaticQuery(graphql`query SiteInfo{
    site{
      siteMetadata{
    
       
        title
      }
    }}`)
    const {title}=data.site.siteMetadata
  return (
    <nav>
         <h1>{title}</h1>
        <div className='link'>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/projects">Portfolio projects</Link>
        </div>

    </nav>
  )
}

export default Navbar