import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Card2 from './Card2'


const Dashboard = () => {

      const dashboardThings = [
        {
          title: 'Available Position',
          number: 24,
          description: '4 Urgently needed',
          bgColor: 'bg-custombg2' 

        },
        {
          title: 'Job Open',
          number: 10,
          description: '4 Active hiring',
          bgColor: 'bg-custombg1'

        },
        {
          title: 'New Employees',
          number: 24,
          description: '4 Department',
          bgColor: 'bg-custombg3'
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
    <div className='w-screen'>
            <Navbar />
        <div className='bg-red-100 h-screen px-10'>
          <h1 className='font-semibold text-3xl p-4'>Dashboard</h1>
          <div>
            <div>
              <Card info={dashboardThings}/>
            </div>
            <div>
              <Card2 info={dashboardThings2} />
            </div>
            <div className='w-640 h-334 bg-red-900 rounded-lg'>
              <h1>Announcement</h1>
            </div>
          </div>
          <div></div>
        </div>
    </div>
  )
}

export default Dashboard