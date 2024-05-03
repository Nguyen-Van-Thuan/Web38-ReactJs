import React from 'react'
import Shoppingcart from './component/Shoppingcart'
import ListProduct from './component/ListProduct';
import SttInfo from './component/SttInfo';

const App = () => {
  const cart = ["iphone", "samsung", "opple", "xiaomi"];
  const listProduct = ['SP1', 'SP2', 'SP3', 'SP4'];
  const status = "unSuccess"

  return (
    <>
      <Shoppingcart cart={cart} />
      <ListProduct listProduct={listProduct}/>
      <SttInfo status={status}/>
    </>
  )
}

export default App