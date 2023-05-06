import React from "react";
import styled, { css } from "styled-components";

const NavWrapper = styled.div`
  width: 100vw;
  text-align: center;
  border-bottom: 1px solid #ccc;
`;

function Header() {
  return (
    <NavWrapper>
      <h1>Wordle</h1>
    </NavWrapper>
  );
}

export default Header;
