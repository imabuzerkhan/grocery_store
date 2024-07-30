"use client"
import { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import GlobalApi from '@/_service/GlobalApi'

const businessDetails = ({params}) => {


  const {data , status} = useSession();
const [business , Setbusiness] = useState([])

useEffect(()=>{
  auth();
}, [])

const auth = ()=>{
  if(status=='loading'){
    return <p>Loading...</p>

  }

  if (status=='unauthenticated'){
    signIn('descope')
  }
}


 



useEffect(()=>{
  params&&getbusinessbyid();
}, [params])


const getbusinessbyid = ()=>{
GlobalApi.getbusinessbyid(params.businessId).then((res)=>{
 console.log(res.businesslists)
})
}









  return  status=='authenticated'&&  (
    <div>
    {
      data.map((item )=>{
        <div key={item.id} >


          
        </div>
      })
    }
    </div>
  )
}

export default businessDetails
