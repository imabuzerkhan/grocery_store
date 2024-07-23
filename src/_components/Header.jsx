"use client"


import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
const Header = () => {

const {data} = useSession();

useEffect(()=>{
console.log(data)
},[data])

  return (
    <div className='p-5 shadow-sm flex justify-between ' >
      <div className="flex items-center gap-8 " >
    <Link href={'/'} > <Image
      src={'logo.svg'}
      alt='logo'
      width={180}
      height={100}
      
      />
      </Link> 
      <div className="text md:flex items-center gap-6 hidden ">
        <h2 className='hover:scale-105 hover:text-purple-400 cursor-pointer ' >Home</h2>
        <h2 className='hover:scale-105 hover:text-purple-400 cursor-pointer ' >Service</h2>
        <h2 className='hover:scale-105 hover:text-purple-400 cursor-pointer ' >About us</h2>
      </div>
      
     </div>
     <div className="button">
      {
        data?.user?
        <Image
        src={data?.user?.image}
        alt='user'
        width={40}
        height={40}
        className='rounded-full'
        
        />:   <Button  onClick={()=>signIn('descope')} >Login/ Sing Up</Button>
      }
     
      </div>
    </div>
  )
}

export default Header
