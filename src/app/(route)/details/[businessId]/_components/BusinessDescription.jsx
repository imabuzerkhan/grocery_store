import Image from 'next/image'
import React from 'react'

function BusinessDescription({business}) {
  return  (
    <div>
   
      
        {business.map((item,index)=>(
          <>
          <div>
          <h2 className='font-bold text-[25px] '>Description</h2>
          <p className='mt-4 text-lg text-gray-600'>{item.about}</p>
          </div>
         <div>
         <h2 className='font-bold text-[25px] mt-8'>Gallery</h2>
         <div className='grid grid-cols-2 md:grid-cols-3
      lg:grid-cols-4 gap-5 mt-5'>
         <Image  src={item?.image[0]?.url || '/path/to/default/image.jpg'} key={index}
          alt='image'
          width={700}
          height={200}
          className='rounded-lg' />
          
      </div>
         </div>
         </>
         
        ))}
        
      </div>
    
  )
}

export default BusinessDescription