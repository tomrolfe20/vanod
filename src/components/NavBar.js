import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <NavLink>
          <Link to='/sizes'>
            <a>Prices</a>
          </Link>
        </NavLink>
        <NavLink>
          <a>Reviews</a>
        </NavLink>
        <NavLink>
          <a>About</a>
        </NavLink>
        <NavLink>
          <a>Blog</a>
        </NavLink>
        <NavLink>
          <a>Contact</a>
        </NavLink>
      </NavContainer>
    </>
  );
};

export default NavBar;

const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #e0fbfc;
  display: flex;
  justify-content: right;
  align-items: center;
  position: sticky;
`;
const NavLink = styled.div`
  padding: 5px;
  color: #253237;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid #4e9f3d;
  }
`;
