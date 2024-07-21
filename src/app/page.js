"use client"


import Business from "@/_components/Business"
import CategoryList from "@/_components/CategoryList"
import Hero from "@/_components/Hero"
import GlobalApi from "@/_service/GlobalApi"
import { useEffect, useState } from "react"
const Home = () => {

const [categorylist , setcategorylist] = useState([])
const [businesslist , setbusinesslist] = useState([])

  useEffect( ()=>{
getCategoryList();
BusinessListAll();
  },[])

  const getCategoryList=()=>{
    GlobalApi.getCategory().then(res =>{
      setcategorylist(res.categories)
    } )
  }

  const BusinessListAll=()=>{
    GlobalApi.getCategory().then(res =>{
      setbusinesslist(res)
    } )
  }


  return (
    <>
  <Hero/>
  <CategoryList  CategoryList={categorylist} />
  <Business      Businesslist ={businesslist}             />
    </>
  )
}

export default Home
