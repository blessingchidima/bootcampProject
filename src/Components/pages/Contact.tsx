import React from 'react'
import Appointment from './Appointment';
import styled from "styled-components"
import img from "../../Assets/contact_header_bg.jpg"
import { NavLink } from 'react-router-dom';
const Contact = () => {
  return (
    <div>
  <Container style={{backgroundImage : `url(${img})`}}>
  <Nav>
           <NavLinks to="/Contact">Contact</NavLinks>
          </Nav>
          {/* overlay */}
        <BlackOverlay>
          <h1>CONTACT</h1>
          <div>
            <Text>Give us a quick shout-out if you need to find us quickly!</Text>
           
          </div>
         
        </BlackOverlay>
      </Container>
       <Appointment/>
    </div>
  );
};

export default Contact;

const NavLinks = styled(NavLink)`
  text-decoration: none;
`;


const Nav = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  font-size: 14px;
  color: #6b6b6b;
  cursor: pointer;
  font-weight: 600;
  transition: all 300ms;
  :hover {
    color: black;
  }
`;

const Text = styled.div`
  font-size: 20px;
  color: white;
`;
const BlackOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0000006e;

  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 0;
    color: #fff;
    font-family: "Niconne", cursive;
  }
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 30px);
  position: relative;
  background-attachment: fixed;
  background-color: yellow;
  background-repeat: no-repeat;
  background-size: cover;

`;


