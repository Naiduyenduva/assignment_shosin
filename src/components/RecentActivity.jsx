import React from 'react'

const RecentActivity = () => {
  return (
    <div>
        <div className='w-427 h-258 bg-recentActivitybg text-white rounded-xl grid gap-2 p-2'>
            <div className='bg-recentActivitybg2 h-12 rounded-xl'>
                <h1 className='font-medium py-2 pl-5 text-lg'>Recent Activity</h1>
            </div>
            <div className='ml-4'>
                <h1 className='font-medium text-xs opacity-60'>10.40 AM, Fri 10 Sept 2021</h1>
                <h1 className='font-medium text-lg'>You Posted a New Job</h1>
                <p className='text-sm font-normal opacity-80'>Kindly check the requirements and terms of work and make sure everything is right.</p>
            </div>
            <div className='flex gap-5 ml-4'>
                <h1 className='font-normal	text-sm pt-2'>Today you makes 12 Activity</h1>
                <button className='bg-activityButton py-2 px-4 w-139 h-38 rounded font-medium text-sm text-senter'>See All Activity</button>
            </div>
        </div>
    </div>
  )
}

export default RecentActivity