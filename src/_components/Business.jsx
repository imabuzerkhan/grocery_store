import React from 'react'

const Business = ({Businesslist}) => {
  return (
    <div>
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
