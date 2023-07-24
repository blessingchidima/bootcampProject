import React from "react";
import styled from "styled-components";
import img from "../../Assets/slider-3_img_1.jpg";
import Button from "../Statics/Button";



const Heropage = () => {
  return (
    <div>
      <Container style={{backgroundImage : `url(${img})`}}>
      {/* overlay */}
        <BlackOverlay>
          <h1>The best treatments</h1>
          <div>
            <Text>BEAUTY SPA & SALOON</Text>
            <Description>
              Experience The Feelings of Professionalism, Satification &
              Relaxation{" "}
            </Description>
          </div>
            <div style={{ display: "flex"}}>
              <Button title="CONTACT US" fs="rgb(227,189,168)" w="170px" />
              <Button title="BOOK APPOINTMENT" fs=" rgb(77,182,172)" w="170px" />
            </div>
        </BlackOverlay>
      </Container>
    </div>
  );
};

export default Heropage;





const Description = styled.div`
  font-size: 20px;
  color: white;
`;
const Text = styled.div`
  font-size: 50px;
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


