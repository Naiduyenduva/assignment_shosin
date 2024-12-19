import React from 'react'

const Card2 = ({info}) => {
  return (
    <div className='flex gap-3'>
        {
            info.map((item,index)=> (
            <div className='h-196 w-312 flex bg-white rounded-lg p-5 my-5 border-1 border-customBorder'>
                <div>
                    <div>
                        <h3>{item.title}</h3>
                        <h1>{item.number}</h1>
                    </div>
                    <div>
                        <h2>{item.men} Men</h2>
                        <h2>{item.women} Women</h2>
                    </div>
                </div>
                <div>
                    <div>Hello</div>
                    <div>
                        <h2>+{item.percentage}%Past month</h2>
                    </div>
                </div>
            </div>
            ))
        }
    </div>
  )
}

export default Card2