import React from "react";
import styled from "styled-components";

const App = () => {

  const StyledButton = styled.button`
    border-radius: 4px;
    background-color: red;
  `;

  return (
    <>
      <h1>Su dung style component trong du an</h1>
      {/* <button className="btn-primary">Click me!</button> */}
      <StyledButton>Click me!</StyledButton>
    </>
  );
};

export default App;


// Ten bien viet hoa chu cai dau tien cua moi tu 