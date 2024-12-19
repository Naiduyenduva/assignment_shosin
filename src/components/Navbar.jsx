import React from 'react'
import { Search } from 'lucide-react';
import { BellDot } from 'lucide-react';
import { MessageSquareMore } from 'lucide-react';
import { ChevronDown } from 'lucide-react';


const Navbar = () => {
  return (
    <div className='h-24 p-4 flex justify-between'>
      <div className='py-2 px-2 bg-gray-100 w-80 flex gap-2'>
        <input type='text' placeholder='Search' className=' h-11 w-60 p-2 bg-gray-100' />
        <Search/>
      </div>
      <div className='w-364 bg-red-00 flex justify-around'>
        <div className='flex gap-4 py-4'>
              <BellDot />
              <MessageSquareMore />
        </div>
        <div className='flex gap-2'>
          <img src='https://s3-alpha-sig.figma.com/img/40ed/810b/19bda88255a6c220a56cfcf53c020387?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MvkuO6Zo~un8gJVotMc6iuuyP2vvSqOorjNO8vBXzbz0SH76-4Xoukp-5tX95h4devLm-1AFldch-ErUQ2BEQmzSy1GVQr1eHPyTK-NGPuzrV89wtzAoovAMhR7seo1DJD~2hhv-6XkS-mrgisyuvTt6czvW3HvX0Uv6fn6y6K1QjKf8DRrdJt3zSgYLXscWgLPqc3IHmpElXbstNiFj~H9FPQZ2p-1zhOv-l73LMmPd5ndWgJXETBVKgL1wjZucC-x0HF88XZg6nim9YRVhWLG1mhA-ljqJsDek5vGdSUc204HmLd5Y0LMmwJnv7BEF3r5zJiPDlRWQoHe8hXgoRA__' alt='hii' className='w-52 h-78 rounded-full object-cover' />
          <h2>Admirra John</h2>
          <ChevronDown />
        </div>
      </div>
    </div>
  )
}

export default Navbar