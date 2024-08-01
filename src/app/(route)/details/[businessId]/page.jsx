
"use client"
import GlobalApi from '@/_service/GlobalApi';
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import BusinessInfo from './_components/BusinessInfo';
import BusinessDescription from './_components/BusinessDescription';
import SuggestedBusinessList from './_components/SuggestedBusinessList';

function BusinessDetail({params}) {

  const {data,status}=useSession();
  const [business,setBusiness]=useState([]);
  
  useEffect(() => {
  if (params && params.businessId) {
    getBusinessById(params.businessId);
  }
}, [params]);

const getBusinessById = async (id) => {
  try {
    const res = await GlobalApi.getbusinessbyid(id);
    console.log(res.businesslists)
    setBusiness(res.businesslists || []);
  } catch (error) {
    console.error('Error fetching business details:', error);
  }
};

  useEffect(()=>{
    checkUserAuth();
  },[]);

  const checkUserAuth=()=>{
    if(status=='loading')
    {
        return <p>Loading...</p>
    }

    if(status=='unauthenticated')
    {
        signIn('descope');
    }

  }

 

return status=='authenticated'&&business&&(
  <div className='py-8 md:py-20
  px-10 md:px-36'>
      <BusinessInfo business={business} />

      <div className='grid grid-cols-3 mt-16'>
        <div className='col-span-3 md:col-span-2 order-last md:order-first'>
        <BusinessDescription business={business}/>
        </div>
        <div className=''>
        <SuggestedBusinessList business={business}/>
        </div>
      </div>
  
  </div>
)
}

export default BusinessDetail