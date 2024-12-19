import React from 'react'
import Heading from './Heading'

const Sidebar = () => {
  return (
    <div>
      <div className='h-24 bg-slate-400'>
    <h1>Hello</h1>
      </div>
        {/* Sidebar */}
        <div className='px-5 pt-5 w-242 bg-red-50 h-screen'>
            <Heading />
        </div>       
    </div>
  )
}

export default Sidebar