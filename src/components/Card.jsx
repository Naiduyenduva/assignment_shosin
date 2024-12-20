import React from 'react'

const Card = ({info}) => {
  return (
    <div className=' grid sm:flex gap-3 font-poppins'>
        {
            info.map((item,index)=>(
            <div className={`sm:w-204 h-130 rounded-xl py-3 pl-5 pr-3 grid gap- ${item.bgColor}`} key={index}>
                <h1 className='font-medium text-lg'>{item.title}</h1>
                <h1 className='font-bold text-4xl'>{item.number}</h1>
                <h2 className={`font-normal text-base ${item.textcolor}`}>{item.description}</h2>
            </div>
            ))
        }
    </div>
  )
}

export default Card