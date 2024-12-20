import React from 'react'
import Navbar from './Navbar'
import Card1 from './Card1'
import Card2 from './Card2'
import Anouncement from './Anouncement'
import UpcomingSch from './UpcomingSch'
import RecentActivity from './RecentActivity'


const Dashboard = () => {

      const dashboardThings2 = [
        {
          title: 'Total Employees',
          number: 262,
          men: 120,
          women: 96,
          percentage: 2
        },
        {
          title: 'Talent Request',
          number: 16,
          men: 6,
          women: 10,
          percentage: 5
        }
      ]

      
  return (
    <div className='w-screen font-poppins'>
            <Navbar />
        <div className='h-screen px-10'>
          <h1 className='font-semibold text-2xl py-3 w-640 h-62'>Dashboard</h1>
          <div className='grid gap-2 sm:flex sm:gap-5'>
                <div>
                  <div className='grid sm:flex gap-3'>
                    <Card1 text="Available Position" description="4 Urgently needed" number={24} variant="primary" tVariant='primary'></Card1>
                    <Card1 text="Job Open" description="4 Active hiring" number={10} variant="secondary" tVariant="secondary" ></Card1>
                    <Card1 text="New Employees" description="4 Department" number={24} variant="danger" tVariant='danger' ></Card1>
                  </div>
                  <Card2 info={dashboardThings2} />
                  <Anouncement />
                </div>
                <div className='grid gap-5'>
                  <RecentActivity />
                  <UpcomingSch />
                </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard