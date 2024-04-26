import React, { useState } from 'react'
import Count from "./components/Count";

const App = () => {

  // Khai bao state
  const [name, setName] = useState("Web38");
  const [email, setEmail] = useState("nguyenvana@gmail.com");


  return (
    <Count name={name}/>
  )
}

export default App


// useState() -> Hooks o trong react.js
   // -> Khai bao 1 state(trang thai) cua ung dung
   // -> Gia tri o trong state (So 1) -> Goi la gia tri ban dau cua "sate" Name
// const [name, setName] 
  //  name: La 1 cai state do minh tu dinh nghia, chinh gia tri ma su dung trong chuong tring
  // setName: La cach de sau nay minh cap nhat lai cai gia tri name

