import React, { useState } from 'react'

const Count = ({name}) => {
  console.log(name);
  // Khai bao 1 state count
  const [count, setCount] = useState(2);

  // Khai bao function handleCount
  const handleCount = () => {
    //xu ly logic khi nguoi dung bam nut button
    setCount(count + 1);
  }

  return (
    <>
      <h1>Current Count: {count}</h1>
      <button onClick={handleCount}>Count ++</button>
    </>
  )
}

export default Count