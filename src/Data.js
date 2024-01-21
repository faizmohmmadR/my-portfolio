import React from 'react'

const Data = (props) => {
  return (
    <button onClick={()=>{props.onClick(1)}}>Data</button>
  )
}

export default Data