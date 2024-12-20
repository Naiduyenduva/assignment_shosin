import React from 'react'
import SmallCard from './SmallCard'
import { ChevronDown } from 'lucide-react';
import { TiPin } from "react-icons/ti";


const Anouncement = () => {
    const detailsArray = [
        {
            title: 'Outing schedule for every departement',
            time: '5 Minutes ago',
            extraicon: TiPin,
            isHighlighted: true
        },
        {
            title: 'Meeting HR Department',
            time : 'Yesterday, 12:30 PM',
            extraicon: TiPin,
            isHighlighted: false
        },
        {
            title: 'IT Department need two more talents for UX/UI Designer position',
            time : 'Yesterday, 09:15 AM',
            extraicon: TiPin,
            isHighlighted: false
        }
]
  return (
    <div>
         <div className='w-640 h-334 rounded-lg border-2 border-slate-200 mt-1 '>
            <div className='flex justify-around px-5 py-3'>
                <h1 className='text-customfontcolor2 font-semibold px-4 text-lg'>Announcement</h1>
                <div className='flex gap-2 text-card2text2'>
                    <h3 className='font-normal text-xs mt-1'>Today, 13 Sep 2021</h3>
                    <ChevronDown />
                </div>
            </div>
            <SmallCard info={detailsArray} />
            <h2 className='text-center text-endtitles border-t-2 border-slate-200 pt-2'>See All Announcement</h2>
        </div>
    </div>
  )
}

export default Anouncement