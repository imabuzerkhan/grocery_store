'use client'

import React from 'react'
import { useEffect, useState } from 'react';
import GlobalApi from '@/_service/GlobalApi';
import Image from 'next/image';
const Sidebar = () => {

  const [categorylist, setCategoryList] = useState([]);
 

  useEffect(() => {
    getCategoryList();
    
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      setCategoryList(res.categories);
    });
  };



  return (
    <div className='md:mx:16 mx-6' >
     <h2 className='font-bold text-xl mt-2 ' >Category</h2>
     {
      categorylist.map((category , id)=>(
        <div key={id} className='flex item-center  gap-3 my-5 border bg-slate-100 cursor-pointer py-2 px-3 hover:bg-purple-200 hover:border-gray-600 rounded-xl md:mr-10 ' >
 <Image
            src={category.categoryimage.url}
            alt='icon'
            width={35}
            height={35}
          />
          <h2 className='font-medium font-serif md:text-xl  ' >{category.name}</h2>
        </div>


      
      ))
     }
    </div>
  )
}

export default Sidebar
