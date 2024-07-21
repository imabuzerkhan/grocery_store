import React from 'react'

const Business = ({Businesslist , title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {
        Businesslist.map((item , index)=>{
          <div key={index} >
<h2>{item.name}</h2>


          </div>
        })
      }
    </div>
  )
}

export default Business
