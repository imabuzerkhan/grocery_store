"use client"
import Image from "next/image";
import GlobalApi from "@/_service/GlobalApi";
import { useEffect, useState } from "react";
import Link from "next/link";
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
<Link href={'/search/'+ category.name}  ><div key={index} className='flex items-center  px-2 py-2 gap-2  md:gap-10 rounded-lg border mb-3 cursor-pointer hover:bg-purple-50 hover:text-purple-600 hover:border-purple-400 ' >
<Image
            src={item.categoryimage.url}
            alt='icon'
            width={30}
            height={30}
          />
          <h2>{item.name}</h2>


</div>
</Link>
        ))
      }

    </div>
  )
}

export default Categorysidebar
