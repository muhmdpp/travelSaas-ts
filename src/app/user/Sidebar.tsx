'use client';


import React from 'react'
import Link from 'next/link';
import {Sidebar,MenuItem,Menu} from 'react-pro-sidebar'
function SideBar() {
  return (
    <Sidebar backgroundColor="#1f2937" rootStyles={{ color: 'white', height: '100vh' ,width:'8%'}}>
       <Menu>
        <MenuItem>
          <Link href="/dashboard">Dashboard</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/services">Services</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/requests">Requests</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/settings">Settings</Link>
        </MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default SideBar

//