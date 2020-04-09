import React from "react";
import styled from "styled-components";

const ResponsiveBlock = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  console.log("rest ", rest);
  console.log("children ", children);
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
