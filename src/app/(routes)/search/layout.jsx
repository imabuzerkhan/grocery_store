import React from 'react'
import Categorysidebar from './_components/Categorysidebar'

const layout = ({children}) => {
  return (
    <div>
      <div className="grid grid-cols-4   ">

<div className='' >
<Categorysidebar/> </div>

<div className='col-span-3' >
      {children}
      </div>
      </div>
    </div>
  )
}

export default layout
