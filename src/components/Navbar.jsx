import React from 'react'
import { Search } from 'lucide-react';
import { BellDot } from 'lucide-react';
import { MessageSquareMore } from 'lucide-react';
import { ChevronDown,AlignJustify } from 'lucide-react';


const Navbar = () => {
  return (
    <div className='h-24 p-4 flex sm:gap-1 gap-60 sm:justify-between ml-5 text-card2text2'>
      <div className='w-10 sm:w-334 flex gap-2 justify-around sm:border-2 sm:border-slate-200 h-11 mt-3'>
        <input type='text' placeholder='Search' className='p-2 hidden sm:block sm:focus:outline-none' />
        <div className='mt-2 flex gap-2'>
          <div className='block sm:hidden ml-2'>
          <AlignJustify />
        </div>
          <Search />
        </div>
      </div>
      <div className='w-364 bg-red-00 flex gap-5 mt-2'>
        <div className='flex gap-4 py-4'>
              <BellDot />
              <MessageSquareMore />
        </div>
        <div className='flex gap-1 sm:gap-2'>
          <img src='https://s3-alpha-sig.figma.com/img/40ed/810b/19bda88255a6c220a56cfcf53c020387?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MvkuO6Zo~un8gJVotMc6iuuyP2vvSqOorjNO8vBXzbz0SH76-4Xoukp-5tX95h4devLm-1AFldch-ErUQ2BEQmzSy1GVQr1eHPyTK-NGPuzrV89wtzAoovAMhR7seo1DJD~2hhv-6XkS-mrgisyuvTt6czvW3HvX0Uv6fn6y6K1QjKf8DRrdJt3zSgYLXscWgLPqc3IHmpElXbstNiFj~H9FPQZ2p-1zhOv-l73LMmPd5ndWgJXETBVKgL1wjZucC-x0HF88XZg6nim9YRVhWLG1mhA-ljqJsDek5vGdSUc204HmLd5Y0LMmwJnv7BEF3r5zJiPDlRWQoHe8hXgoRA__' alt='hii' className='w-11 h-11 rounded-full mt-1 object-cover' />
          <h2 className='hidden sm:mt-3 sm:text-namecolor sm:font-bold sm:block'>Admirra John</h2>
          <div className='mt-3'>
            <ChevronDown />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar