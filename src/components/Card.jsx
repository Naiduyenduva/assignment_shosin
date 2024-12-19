import React from 'react'

const Card = ({info}) => {
  return (
    <div className='flex gap-3'>
        {
            info.map((item,index)=>(
            <div className={`w-204 h-130 bg-red-900 rounded-lg py-3 pl-5 pr-3 ${item.bgColor}`} key={index}>
                <h1>{item.title}</h1>
                <h1>{item.number}</h1>
                <h2>{item.description}</h2>
            </div>
            ))
        }
    </div>
  )
}

export default Card