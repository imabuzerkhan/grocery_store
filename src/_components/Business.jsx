import Image from 'next/image';
import React from 'react';

const Business = ({ businesslists, title }) => {
  return (
    <div className='my-5' >
      <h1 className='font-bold text-[22px] ' >{title}</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 ls-4  gap-6 mt-5 ' >
      {businesslists.map((item, index) => (
        <div key={index} className='shadow-md rounded-lg ' >
          <Image
            src={item?.image[2].url}
            alt="business image"
            width={500}
            height={200}
            className='h-[150px] md:h-[200px] object-cover rounded-lg '
          />
          <div className='flex flex-col items-baseline p-3 space-y-2 ' >
<h2 className='p-1 bg-purple-200 text-purple-500 rounded-full px-2 ' >{item.category.name}</h2>
<h2 className='font-bold text-lg ' >{item.name}</h2>
<h2 className='text-purple-500 text-sm ' >{item.contactPerson}</h2>
<h2  className='text-gray-500 text-sm ' >{item.address}</h2>
          </div>
           
        </div>
      ))}
      </div>
    </div>
  );
};

export default Business;
