"use client"
import { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'

const businessDetails = () => {


  const {data , status} = useSession();

  if(status=='loading'){
    return <p>Loading...</p>

  }

  if (status=='unauthenticated'){
    signIn('descope')
  }













  return  status=='authenticated'&&  (
    <div>
      Businesslist
    </div>
  )
}

export default businessDetails
