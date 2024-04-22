import React from 'react'

const ListProduct = ({listProduct}) => {
  let isEmpty = listProduct.length; //3


  // console.log(listProduct);

  return (
    <>
    {isEmpty !== 0 && (<h1>Danh sach san pham</h1>)}
      
      {isEmpty !== 0 ? (
        <ul>
          {listProduct.map((item)=> <li key={item}>{item}</li>)}
        </ul>
      ): ("Khong co san pham")}
    </>
  )
}

export default ListProduct


// A ? B : C -> Toan tu 3 ngoi
// A dung chay B
// A sai chay C


// && dong thoi
// || hoac cai nay hoac cai kia