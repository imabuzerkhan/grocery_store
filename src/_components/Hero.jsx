import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
const Hero = () => {
  return (
    <div  className='flex items-center flex-col pt-14 gap-3  pb-7' >
      <h2 className='font-bold text-[46px] text-center text-[#272E3F] ' >Find home servic/Repair <br />
       Near You</h2>
      <h2 className='text-xl text-gray-400' >Expolre Best Home Service</h2>
<div  className='mt-4  flex gap-4 item-center ' >
  <Input placeholder="Search" 
  className="rounded-full md:w-[350px] "
 
  />
   <Button  className="rounded-full h-[46px] " >
<Search  className='text-white h-4 font-bold w-4 '  />

   </Button>
</div>
    </div>
  )
}

export default Hero
