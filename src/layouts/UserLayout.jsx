import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/user/Header'
import Footer from '../components/user/Footer'

function UserLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default UserLayout
