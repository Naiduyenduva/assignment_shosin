import React from 'react'
import Heading from './Heading'
import logo from '../assets/logo.png'
import { LayoutDashboard, UserPlus, Users,CalendarCheck, Headset, Settings, Clapperboard } from 'lucide-react';



const Sidebar = () => {
  const mainmenuItems = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        textcolor: 'text-DashboardColor'
    },
    {
        title: 'Recruitment',
        icon: UserPlus,
        textcolor: 'text-customfontcolor'
    },
    {
        title: "Schedule",
        icon: CalendarCheck,
        textcolor: 'text-customfontcolor'
    },
    {
        title: 'Employee',
        icon: Users,
        textcolor: 'text-customfontcolor'
    },
    {
        title: "Department",
        icon: Clapperboard,
        textcolor: 'text-customfontcolor'
    },
  
]
  const otherItems = [
    {
      title: 'Support',
      icon: Headset,
      textcolor: 'text-customfontcolor'
  },
  {
      title: "Settings",
      icon: Settings,
      textcolor: 'text-customfontcolor'
  },
  ]
  return (
    <>
    <div className='hidden text-customfontcolor sm:block'>
      <div className='h-24'>
        <div className='flex gap-2 p-4 m-4'>
          <img src={logo} alt='logo' className='h-8 w-8' />
          <h2 className='text-logocolor font-bold text-2xl leading-3 mt-3	'>Vasitum</h2>
        </div>
      </div>
        {/* Sidebar */}
        <div className='px-5 pt-5 w-242 h-screen'>
            <p className='font-normal text-xs ml-6 opacity-50'>MAIN MENU</p>
            <Heading itemsArray={mainmenuItems} />
            <p className='font-normal text-xs ml-6 mt-10 opacity-50'>OTHER</p>
            <Heading itemsArray={otherItems} />
        </div>       
    </div>
    </>
  )
}

export default Sidebar