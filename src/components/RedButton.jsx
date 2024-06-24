import React from 'react'

function RedButton(props) {

console.log(props)
  return (
    <button style={{backgroundColor:props.color}}>
        {props.message}
    </button>
  )
}

export default RedButton