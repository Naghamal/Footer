import React from "react";
import styled from "styled-components";
import {
    Link
} from "react-router-dom";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-area: top;
    
    align-items: center;
`;

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    background-color: #f3aac0; 
    border-radius: 5px;
    font-weight: bold;
    margin: 2rem;
    padding: 8px 12px;
`;
const Navbar = () => {
    return (
        <StyledNav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
            <StyledLink to="/portfolio">Portfolio</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            
        </StyledNav>
    );
}


export default Navbar;
