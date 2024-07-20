"use client"


import CategoryList from "@/_components/CategoryList"
import Hero from "@/_components/Hero"
import GlobalApi from "@/_service/GlobalApi"
import { useEffect, useState } from "react"
const Home = () => {

const [categorylist , setcategorylist] = useState([])


  useEffect( ()=>{
getCategoryList();
  },[])

  const getCategoryList=()=>{
    GlobalApi.getCategory().then(res =>{
      setcategorylist(res.categories)
    } )
  }



  return (
    <>
  <Hero/>
  <CategoryList  CategoryList={categorylist} />
    </>
  )
}

export default Home
