import React from 'react'
import Heading from './Heading'
import logo from '../assets/logo.png'

const Sidebar = () => {
  return (
    <div className='border-2 border-red-900'>
      <div className='h-24'>
        <div className='flex gap-2 p-4 m-4'>
          <img src={logo} alt='logo' className='h-8 w-8' />
          <h2 className='text-logocolor font-bold text-2xl leading-3 mt-3	'>Vasitum</h2>
        </div>
      </div>
        {/* Sidebar */}
        <div className='px-5 pt-5 w-242 h-screen'>
            <Heading />
        </div>       
    </div>
  )
}

export default Sidebar