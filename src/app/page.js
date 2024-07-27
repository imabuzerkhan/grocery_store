"use client"



import Banner from "@/_components/Banner";
import Business from "@/_components/Business";
import CategoryList from "@/_components/CategoryList";
import Hero from "@/_components/Hero";
import GlobalApi from "@/_service/GlobalApi";
import { useEffect, useState } from "react";



const Home = () => {
  const [categorylist, setCategoryList] = useState([]);
  const [businesslist, setBusinessList] = useState([]);

  useEffect(() => {
    getCategoryList();
    getBusinessList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      setCategoryList(res.categories);
    });
  };

  const getBusinessList = () => {
    GlobalApi.getAllbusinesslist().then((res) => {
      setBusinessList(res.businesslists);
    });
  };

  return (
    <>
     <Banner/>
      <Hero />
    
      <CategoryList CategoryList={categorylist} />
      <Business businesslists={businesslist} title="Popular Business" />
    </>
  );
};

export default Home;
