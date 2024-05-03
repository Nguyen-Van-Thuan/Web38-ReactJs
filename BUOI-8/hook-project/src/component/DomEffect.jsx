import React, { useEffect, useState } from 'react'

const DomEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = count;
  },[count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count + 1)}>Click me!</button>
    </>
  )
}

export default DomEffect