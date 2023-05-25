import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import "./style.css";
// import './app.css';
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Form from "./components/Form";
import Hero from "./Hero";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./assets/social/logo.png";

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
        <LogoContainer>
          <StyledImg src={logo} alt="Logo" />
        </LogoContainer>

        <Navbar />

        <MainContainer>
          {/* <Hero text="MyHero" myOtherKey={33} name="Da man" /> */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <h1></h1>
        </MainContainer>
        <Footer />
      </GridContainer>
    </Router>
  );
}

export default App;
