import * as React from 'react';
import styled from '@emotion/styled';
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;

  &:hover {
    color: #535bf2;
  }
`;

const Navbar: React.FC = () => (
  <NavbarContainer>
    <NavLink to="/">Home</NavLink>
    <NavLink to="search">Search</NavLink>
  </NavbarContainer>
);

export { Navbar };