"use client"

import React, { useEffect } from 'react'
import GlobalApi from "@/_service/GlobalApi";
const businessbycategory = ({params}) => {





  // const [businesslist, setBusinessList] = useState([]);

  useEffect(() => {
 params&&getCategoryListbybusiness();
   
  }, [params]);

  const getCategoryListbybusiness = () => {
    GlobalApi.getcategorybusinesslist(params.category).then((res) => {
 console.log(res)
    });
  };

  return (
    <div>
      hello world
    </div>
  )
}

export default businessbycategory
