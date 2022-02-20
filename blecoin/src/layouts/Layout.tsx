import React from "react";
import styled from "styled-components";

// components
import SideBar from "@src/components/SideBar";

const Wrapper = styled.main`
  @media (min-width: 486px) {
    width: 486px;
    margin: auto;
  }
`;

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      {children}
      <SideBar />
    </Wrapper>
  );
};

export default Layout;
