import React from 'react'

const Heading = ({itemsArray}) => {

  return (
    <>
        <div>
            {
                itemsArray.map((item,index) => {
                    return (
                        <div key={index} className={`flex gap-6 py-4 pl-6 ${item.textcolor} `}>
                        <item.icon size={20} />
                        <h3 className={`${item.textcolor}`}>{item.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Heading