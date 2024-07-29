"use client"

import Business from '@/_components/Business'
import GlobalApi from '@/_service/GlobalApi'
import React, { useEffect, useState } from 'react'

const BusinessbyCategory = ({ params }) => {
  const [Businesslist, setbusinesslist] = useState([])

  useEffect(() => {
    console.log(params)
    if (params) {
      getBusinessList()
    }
  }, [params])

  const getBusinessList = async () => {
  
      const response = await GlobalApi.getAllbusinesslist(params.category)
      setbusinesslist(response?.businesslists || [] )
    
  }

  return (
    <div>
      <Business title={params.category} businesslists={Businesslist} />
    </div>
  )
}

export default BusinessbyCategory
