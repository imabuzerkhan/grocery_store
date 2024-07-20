import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
const Header = () => {
  return (
    <div className='p-5 shadow-sm flex justify-between ' >
      <div className="flex items-center gap-8 " >
      <Image
      src={'logo.svg'}
      alt='logo'
      width={180}
      height={100}
      
      />
      <div className="text md:flex items-center gap-6 hidden ">
        <h2 className='hover:scale-105 hover:text-purple-400 cursor-pointer ' >Home</h2>
        <h2 className='hover:scale-105 hover:text-purple-400 cursor-pointer ' >Service</h2>
        <h2 className='hover:scale-105 hover:text-purple-400 cursor-pointer ' >About us</h2>
      </div>
      
     </div>
     <div className="button">
        <Button>Get started</Button>
      </div>
    </div>
  )
}

export default Header