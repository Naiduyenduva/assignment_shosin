import React from 'react'
import SmallCard from './SmallCard'

const UpcomingSch = () => {
    const detailsArray = [
        {
            title: 'Review candidate applications',
            time: 'Today - 11.30 AM'
        }
    ]
    const detailsArray2 = [
        {
            title: 'Interview with candidates',
            time : 'Today - 10.30 AM'
        },
        {
            title: 'Short meeting with product designer from IT Departement',
            time : 'Today - 09.15 AM'
        }
    ]
  return (
    <div>
        <div className='w-427 h-424 bg-customwhite rounded-lg'>
            <div className='flex justify-between px-5 pt-3'>
                <h1 className='text-customfontcolor2 font-medium text-lg px-4'>Upcoming Schedule</h1>
                <h2>Today, 13 Sep 2021</h2>
            </div>
            <p className='ml-9 mt-5 text-slate-500 font-normal text-sm'>Priority</p>
            <SmallCard info={detailsArray} />
            <p className='ml-9 text-slate-500 font-normal text-sm'>Other</p>
            <SmallCard info={detailsArray2} />
        </div>
    </div>
  )
}

export default UpcomingSch