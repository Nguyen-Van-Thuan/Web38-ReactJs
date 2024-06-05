import React from 'react'

const getData = async() => {
  const response = await fetch('https://qcshp3-8080.csb.app/products');

  if(!response.ok){
    throw new Error();
  }

  return response.json();
}

const About = async () => {

   const data = await getData();
   console.log(data);

  return (
    <h1>This is about</h1>
  )
}

export default About



// domain_/about/company