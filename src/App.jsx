import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import './style.css';
// import './app.css';
import Footer from './Footer';


// import linIcon from './assets/social/linkedin.png';
// import fiIcon from './assets/social/figma.png';
// import gitIcon from './assets/social/github.png';
// import wpIcon from './assets/social/wp.png';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import logo from './assets/social/logo.png';


const MyButton = styled.button`
  padding: 4em;
  background-color: papayawhip;
`;

const LogoContainer = styled.div`
max-width: 6rem;

grid-area: logo;
`;

const StyledImg = styled.img`
width: 100%;
`;

const MainContainer = styled.div`
grid-area: main;
`;

const GridContainer = styled.div`
display: grid;
grid-template-rows: 10rem repeat(3, 1fr) 10rem;
grid-template-columns: repeat(5, 1fr);
grid-template-areas:
"logo top top top top"
"main main main main main"
"main main main main main"
"main main main main main"
"footer footer footer footer footer";
min-height: 100vh;
`;

const StyledFooter = styled.footer`
grid-area: footer;
align-self: center;
`;

const StyledIcons = styled.img`
  height: auto;
  width: 20px;

  `;



function App() {

  return (
    <Router>
      <GridContainer>
        <LogoContainer><StyledImg src={logo} alt="Logo" /></LogoContainer>
        <Navbar />
        <MainContainer>
        <Switch>
          <Route path="/about">
            <p>About</p>
          </Route>
          <Route path="/portfolio">
            <p>Portfolio</p>
          </Route>
          <Route path="/contact">
            <p>Contact</p>
          </Route>
          <Route path="/">
            <p>Home</p>
          </Route>
        </Switch>
    
        <h1>Hello Nagham</h1>
       </MainContainer>
       
       {/* <StyledFooter>
       <p>&copy; 2023 Nagham Alsuhaili</p>
         <ul>
          
          <a href="https://www.linkedin.com/in/nagham-alsuhaili-315a14b5/"><li><StyledIcons src={linIcon} alt="" /></li></a>
          <a href="https://www.figma.com/file/Ar8gPRDpEWI4G255uSc71a/Brand-Style-Guide?node-id=0%3A1&t=letpSJOwKKT4lHfs-1"><li><StyledIcons src={fiIcon} alt="" /></li></a>
          <a href="https://github.com/Naghamal/NaghamAlsuhaili"><li><StyledIcons src={gitIcon} alt="" /></li></a>
          <a href="https://naal.uxf22c.qlok.dev/"><li><StyledIcons src={wpIcon} alt="" /></li></a>
        </ul>
       
       </StyledFooter> */}
       <Footer />
      </GridContainer>
    </Router>
  );
}


export default App;