import { Button } from '@/components/ui/button'
import { Clock, Mail, MapPin, Share, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function BusinessInfo({ business }) {
  // Debugging to ensure data is received
  console.log( "business list :" , business);

  return (
   
    <div className='md:flex gap-4 items-center'>
      {
        business.map((item)=>(
          <>
            <Image
              src={item?.image[0]?.url || '/path/to/default/image.jpg'}
              alt={item.name || 'Business Image'}
              width={150}
              height={150}
              className='h-[150px] rounded-full object-cover '
            />
        

    <div className='flex justify-between items-center w-full'>
      <div className='flex flex-col mt-4 md:mt-0 items-baseline gap-3'>
        <h2 className='text-primary p-1 px-3 text-lg bg-purple-100 rounded-full'>
          {item?.category?.name || 'Category not available'}
        </h2>
        <h2 className='text-[40px] font-bold'>{item?.name || 'N/A'}</h2>
        <h2 className='flex gap-2 text-lg text-gray-500'>
          <MapPin /> {item?.address || 'N/A'}
        </h2>
        <h2 className='flex gap-2 text-lg text-gray-500'>
          <Mail /> {item?.gmail || 'N/A'}
        </h2>
      </div>
      <div className='flex flex-col gap-5 items-end'>
        <Button>
          <Share />
        </Button>
        <h2 className='flex gap-2 text-xl text-primary'>
          <User /> {item?.contactPerson || 'Contact person not available'}
        </h2>
        <h2 className='flex gap-2 text-xl text-gray-500'>
          <Clock /> Available 8:00 AM to 10:00 PM
        </h2>
      </div>
    </div>
     </>
        ))
      }
    
    
    </div>
   
  )
}

export default BusinessInfo
