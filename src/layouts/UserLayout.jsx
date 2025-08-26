import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/user/Header'
import Footer from '../components/user/Footer'
import ScrollToTop from '../components/ui/ScrollToTop'

function UserLayout() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default UserLayout
