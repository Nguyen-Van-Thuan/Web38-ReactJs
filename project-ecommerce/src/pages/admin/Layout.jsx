import React from 'react'
import Header from '../../components/admin/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default Layout