import React from "react";
import styled from "styled-components";
import workPic from "../assets/social/workp.jpg";
import reactPic from "../assets/social/reactp.jpg";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
  text-align: center;
`;

export const StyledP = styled.p`
  width: 70%;
`;

export const StyledreactPic = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  border: 8px solid white;
  border-radius: 50%;
`;

export const StyledworkPic = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const StyledButton = styled.button`
  color: #54c9e6;
  background-color: white;
  padding: 12px;
  border-color: cyan;
  border-radius: 7px;
  font-size: 14px;
  width: 160px;
  margin-bottom: 2.5rem;
`;

function Card() {
  return (
    <CardContainer>
      <StyledworkPic src={workPic} alt="Workp" />
      <StyledreactPic src={reactPic} alt="Reactp" />
      <h1>React Portfolio</h1>
      <StyledP>
        Please behold my amazing React portfolio, showcasing my immense skills.
      </StyledP>
      <StyledButton>View more</StyledButton>
    </CardContainer>
  );
}

export default Card;
