"use client"

import GlobalApi from '@/_service/GlobalApi';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

const BusinessDetails = ({params}) => {
  const { data, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn('descope');
    }
  }, [status]);

 
  useEffect(()=>{
userAuth();
  }, [])

const userAuth = ()=>{
  if (status === 'loading') {
    return <p className='mx-6 md:mx-16 font-bold text-4xl ' >Loading...</p>;
  }

  if (status === 'unauthenticated') {
   confirm("you must login first")
  }

}



  useEffect(() => {
    if (params) {
      getbusinessbyid()
    }
  }, [params]);


const getbusinessbyid = ()=>{
  GlobalApi.businessDeatils(params.businessdeatilsbyid).then((res)=>{
console.log(res)
  })
}



  if (status === 'authenticated') {
    return (
      <div className='mx-6 md:mx-16'>
        <h1>Hello Moto</h1>
      </div>
    );
  }

  return null; 
};

export default BusinessDetails;
