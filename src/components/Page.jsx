import React from 'react'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'



const Page = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <Dashboard />
    </div>
  )
}

export default Page