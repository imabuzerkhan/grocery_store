import React from 'react'
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
<div key={index} className='flex gap-2 rounded-lg border mb-3' >
<Image
            src={category.categoryimage.url}
            alt='icon'
            width={80}
            height={35}
          />
          <h2>{category.name}</h2>


</div>
        ))
      }

    </div>
  )
}

export default Categorysidebar
