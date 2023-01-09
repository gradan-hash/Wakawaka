import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <div>
        <Link to = '/' > Landing</Link>

        <Link to = '/Login'>Login</Link>

        <Link to = '/Register'>Register</Link>

        <Link to ='/properties'>Properties</Link>
      


        </div>
        
     
     


      {/* Renders the current root selected */}

        <Outlet/>
    
    </>
  )
}

