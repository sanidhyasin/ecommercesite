import React from "react";
import styled from "styled-components";

const Conatainer = styled.div`
  height: 30px;
  /* background-color: teal; */
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Conatainer>Super Deal! Free Shipping on Orders Over $ 100</Conatainer>;
};

export default Announcement;
