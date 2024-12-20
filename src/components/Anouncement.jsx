import React from 'react'
import SmallCard from './SmallCard'
import { ChevronDown } from 'lucide-react';



const Anouncement = () => {
    const detailsArray = [
        {
            title: 'Outing schedule for every departement',
            time: '5 Minutes ago'
        },
        {
            title: 'Meeting HR Department',
            time : 'Yesterday, 12:30 PM'
        },
        {
            title: 'IT Department need two more talents for UX/UI Designer position',
            time : 'Yesterday, 09:15 AM'
        }
]
  return (
    <div>
         <div className='w-640 h-334 rounded-lg border-2 border-slate-200 mt-1'>
            <div className='flex justify-around px-5 py-2'>
                <h1 className='text-customfontcolor2 font-semibold px-4 text-lg'>Announcement</h1>
                <div className='flex gap-2 text-card2text2'>
                    <h3 className='font-normal text-xs mt-1'>Today, 13 Sep 2021</h3>
                    <ChevronDown />
                </div>
            </div>
            <SmallCard info={detailsArray} />
            <h2 className='text-center text-endtitles border-2 border-slate-200 mx-2 ml-7 rounded-lg'>See All Announcement</h2>
        </div>
    </div>
  )
}

export default Anouncement