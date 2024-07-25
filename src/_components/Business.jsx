import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const Business = ({ businesslists, title }) => {
  return (
    <div className='my-5' >
      <h1 className='font-bold text-[22px] ' >{title}</h1>
      <div className='grid grid-cols-2 md:grid-col-4 lg:grid-cols-5 ls-4  gap-3 mt-5 ' >
      {businesslists.map((item, index) => (
        <div key={index} className='shadow-md rounded-lg w-[270px] ' >
          <Image
            src={item?.image[0].url}
            alt="business image"
            width={300}
            height={200}
            className='h-[150px] md:h-[200px] object-cover rounded-lg '
          />
          <div className='flex flex-col items-baseline p-3 space-y-2 ' >
<h2 className='p-1 bg-slate-50 text-purple-500 rounded-full px-2 ' >{item.category.name}</h2>
<h2 className='font-bold text-lg ' >{item.name}</h2>
<h2 className='text-purple-500 text-sm font-[600] ' >{item.contactPerson}</h2>
<h2  className='text-gray-500 text-sm font-[600] ' >{item.address}</h2>
<Button className="block wfull" >Book Now</Button> 
          </div>
       
        </div>
      ))}
      </div>
    </div>
  );
};

export default Business;
