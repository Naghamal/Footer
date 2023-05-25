import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactText = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactEmail = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const ContactPhone = styled.p`
  font-size: 1.2rem;
`;

function Contact() {
  return (
    <ContactContainer>
      <h1>Contact</h1>
      <ContactText>
        Welcome! Feel free to reach out to me for any inquiries or collaboration
        opportunities.
      </ContactText>
      <ContactInfo>
        <ContactEmail>Email: Naghamalsuhaili@gmail.com</ContactEmail>
        <ContactPhone>Phone: +46 7641 22 622</ContactPhone>
      </ContactInfo>
    </ContactContainer>
  );
}

export default Contact;
