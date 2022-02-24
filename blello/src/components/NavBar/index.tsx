import React from "react";

// components
import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

// styled-components
import { Wrapper, Container } from "./style";

const NavBar = () => {
  return (
    <Wrapper>
      <Container>
        <Left />
        <Center />
        <Right />
      </Container>
    </Wrapper>
  );
};

export default NavBar;
