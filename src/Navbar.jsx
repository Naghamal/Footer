import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  grid-area: top;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: start;
    height: ${({ isOpen }) => (!isOpen ? "auto" : "300px")};
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    width: 100%;
    a {
      margin-top: 1em;
      margin-right: 1.5em;
    }
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  background-color: #f3aac0;
  border-radius: 5px;
  font-weight: bold;
  margin: 2rem;
  padding: 8px 12px;

  @media (max-width: 768px) {
    display: flex;
    margin: 0;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 50px;
    right: 10px;
  }

  span {
    height: 3px;
    width: 30px;
    background-color: black;
    margin-bottom: 5px;
    border-radius: 5px;
    transition: transform 0.2s ease-in-out;
  }

  span:first-child {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg) translate(5px, 5px)" : "none"};
  }

  span:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  }

  span:last-child {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"};
  }
`;

const links = [
  { id: 1, to: "/", text: "Home" },
  { id: 2, to: "/contact", text: "Contact" },
  { id: 3, to: "/about", text: "About" },
  { id: 4, to: "/projects", text: "Projets" },
];

const MenuIcon = ({ onClick, isOpen }) => (
  <Hamburger onClick={onClick} isOpen={isOpen}>
    <span />
    <span />
    <span />
  </Hamburger>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledNav isOpen={isOpen}>
        {links.map((link) => (
          <StyledLink to={link.to} key={link.id} isOpen={isOpen}>
            {link.text}
          </StyledLink>
        ))}
      </StyledNav>
      <MenuIcon onClick={toggleMenu} isOpen={isOpen} />
    </>
  );
};

export default Navbar;
