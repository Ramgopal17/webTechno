import React from 'react'
import Navbar from './Navbar'
import "../styles/global.css"

function Layout({children}) {
  return (
    <div className='layout'>
<Navbar/>
<div className='content'>
{children}

</div>
<footer>
  <p> copyright 2023,created by @Metapercept</p>
</footer>


    </div>
  )
}

export default Layout