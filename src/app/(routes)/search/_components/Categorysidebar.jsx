"use client"
import Image from "next/image";
import GlobalApi from "@/_service/GlobalApi";
import { useEffect, useState } from "react";
const Categorysidebar = () => {
 
  

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
    <div>
      
      <h2 className='font-bold mb-3 text-lg  ' >Categories</h2>
      {
        categorylist.map((item , index)=>(
<div key={index} className='flex items-center px-2 py-2 gap-2  md:gap-10 rounded-lg border mb-3' >
<Image
            src={item.categoryimage.url}
            alt='icon'
            width={30}
            height={30}
          />
          <h2>{item.name}</h2>


</div>
        ))
      }

    </div>
  )
}

export default Categorysidebar
