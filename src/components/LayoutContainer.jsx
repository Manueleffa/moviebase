import React from 'react'
import Sidebar from './Sidebar'
import MainArea from './MainArea'

const LayoutContainer = () => {
  return (
    <div className="bg-[#020d18] text-white h-screen grid grid-cols-4">
        <Sidebar />
        <MainArea />
    </div>
  )
}

export default LayoutContainer