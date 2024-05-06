import React from 'react'
import ComponentB from './ComponentB'

const ConponentA = ({name}) => {
  console.log(name, "Day la props nhan tu A");
  return (
    <ComponentB name={name}/>
  )
}

export default ConponentA