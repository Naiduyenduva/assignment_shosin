import React from 'react'
import vector from '../assets/Group4.png'

const Card2 = ({info}) => {
  return (
    <div className='grid sm:flex sm:gap-3'>
        {
            info.map((item,index)=> (
            <div className='h-196 sm:w-312 flex gap-3 bg-white rounded-lg p-5 my-5 border-2 border-customBorder'>
                <div className='grid gap-2'>
                    <div className='grid'>
                        <h3 className='font-medium text-lg text-card2text w-36'>{item.title}</h3>
                        <h1 className='font-bold text-4xl text-card2text'>{item.number}</h1>
                    </div>
                    <div>
                        <h2 className='font-normal text-xs text-card2text2'>{item.men} Men</h2>
                        <h2 className='font-normal text-xs text-card2text2'>{item.women} Women</h2>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <img src={vector} alt='vector graph' className='mt-4 mb-3' />
                    </div>
                    <div>
                        <h3 className='bg-red-50 rounded font-normal text-sm px-2 w-32'> +{item.percentage}% Past month</h3>
                    </div>
                </div>
            </div>
            ))
        }
    </div>
  )
}

export default Card2