import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Card2 from './Card2'
import Anouncement from './Anouncement'
import UpcomingSch from './UpcomingSch'
import RecentActivity from './RecentActivity'


const Dashboard = () => {

      const dashboardThings = [
        {
          title: 'Available Position',
          number: 24,
          description: '4 Urgently needed',
          bgColor: 'bg-custombg1',
          textcolor : 'text-textcolor1'
        },
        {
          title: 'Job Open',
          number: 10,
          description: '4 Active hiring',
          bgColor: 'bg-custombg2' ,
          textcolor: 'text-textcolor2'

        },
        {
          title: 'New Employees',
          number: 24,
          description: '4 Department',
          bgColor: 'bg-custombg3',
          textcolor : 'text-textcolor3'
        }
      ]
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
          <div className='flex gap-5'>
                <div>
                  <Card info={dashboardThings}/>
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