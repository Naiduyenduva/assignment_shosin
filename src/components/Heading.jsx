import React from 'react'
import { LayoutDashboard, UserPlus, Users,CalendarCheck, Headset, Settings, Clapperboard } from 'lucide-react';


const Heading = ({itemsArray}) => {

  return (
    <>
        <div>
            {
                itemsArray.map((item,index) => {
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