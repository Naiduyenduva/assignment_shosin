import React from 'react'
import SmallCard from './SmallCard'


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
         <div className='w-640 h-334 rounded-lg border-2 border-slate-800'>
            <div className='flex justify-around px-5 pt-3'>
                <h1 className='text-customfontcolor2 font-semibold px-4 text-lg'>Announcement</h1>
                <h2>Today, 13 Sep 2021</h2>
            </div>
            <div>
            <SmallCard info={detailsArray} />
            </div>
        </div>
    </div>
  )
}

export default Anouncement