import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { URL_PRODUCT_LIST } from '../../components/Untils';
import axios from 'axios';

const ClientDetailProduct = () => {

  // De lay duoc id tren url
  // useParams -> hook cho phep lay duoc tham so id truyen tu router tren url browser

  const idProduct = useParams();
  // console.log(idProduct); tra ve object

  // Sau khi co id -> lay duoc trang detail bang link listing + id
  let urlProduct = URL_PRODUCT_LIST + `/${idProduct.id}`;



  // Call api
  let [data, setData] = useState([]);
  useEffect(()=>{
    const getAPI = async() => {
      const response = await axios.get(urlProduct);
      setData(response.data);
    }
    getAPI();
  }, [urlProduct])

  console.log(data);
  

  return (
    <>
      {data && (
        <h1>{data.title}</h1>
      )}
    </>
  )
}

export default ClientDetailProduct


// url: product -> listing
//url: product/1
//url: product/2
//url: product/3