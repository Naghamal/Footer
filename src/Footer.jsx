import React from "react";
import styled from 'styled-components';

import linIcon from './assets/social/linkedin.png';
import fiIcon from './assets/social/figma.png';
import gitIcon from './assets/social/github.png';
import wpIcon from './assets/social/wp.png';

const StyledIcons = styled.img`
  height: 30px;
  width: 30px;
`;

const StyledFooter = styled.footer`
  grid-area: footer;
  align-self: center;
  background-color: pink;
  justify-content: center;
  border-radius: 2px;
`;

const Footer = () => {
  return (
    <StyledFooter>
    
      <ul>
       <a href="https://www.linkedin.com/in/nagham-alsuhaili-315a14b5/"><li><StyledIcons src={linIcon} alt="" /></li></a>
       <a href="https://www.figma.com/file/Ar8gPRDpEWI4G255uSc71a/Brand-Style-Guide?node-id=0%3A1&t=letpSJOwKKT4lHfs-1"><li><StyledIcons src={fiIcon} alt="" /></li></a>
       <a href="https://github.com/Naghamal/NaghamAlsuhaili"><li><StyledIcons src={gitIcon} alt="" /></li></a>
       <a href="https://naal.uxf22c.qlok.dev/"><li><StyledIcons src={wpIcon} alt="" /></li></a>
     </ul>
     <p className="copy">&copy; 2023 Nagham Alsuhaili</p>
    </StyledFooter>
  );
};

export default Footer;
