import React from 'react'
import { Ellipsis } from 'lucide-react';


const SmallCard = ({info}) => {

  return (
    <div>
        <div className='text-black p-2 ml-5 mt-1 grid gap-2'>
            {
                info.map((item,index)=> (
                    <div className='flex justify-between bg-customwhite2 border-2 border-slate-100 rounded-lg pt-1 pb-2 px-5' key={index}>
                        <div>
                        <h2 className='w-283 font-normal text-[15px] leading-[24px]'>{item.title}</h2>
                        <p className='text-customfontcolor'>{item.time}</p>
                        </div>
                        <div className='pt-4'>
                            <Ellipsis />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SmallCard