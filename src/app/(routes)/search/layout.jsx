import React from 'react'
import Sidebar from './_components/Sidebar'
const layout = ({children}) => {
  return (
    <div className='grid grid-cols-4' >
      <div>
       
        {/* Side Category Navbar */}
        <Sidebar/>
      </div>
    <div className='col-span-3' >
      {children}
    </div>
    </div>
  )
}

export default layout
