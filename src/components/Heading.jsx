import React from 'react'
import { LayoutDashboard, UserPlus, Users,CalendarCheck, Headset, Settings, Clapperboard } from 'lucide-react';


const Heading = () => {

    const sidebarItems = [
        {
            title: "Dashboard",
            icon: LayoutDashboard
        },
        {
            title: 'Recruitment',
            icon: UserPlus
        },
        {
            title: "Schedule",
            icon: CalendarCheck
        },
        {
            title: 'Employee',
            icon: Users
        },
        {
            title: "Department",
            icon: Clapperboard
        },
        {
            title: 'Support',
            icon: Headset
        },
        {
            title: "Settings",
            icon: Settings
        },
    ]
  return (
    <>
        <div>
            {
                sidebarItems.map((item,index) => {
                    return (
                        <div key={index} className='flex gap-6 py-4 pl-6'>
                        <item.icon size={20} />
                        <h3>{item.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Heading