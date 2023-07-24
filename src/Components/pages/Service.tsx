import React from 'react'
import styled from 'styled-components'
import image1 from "../../Assets/features-1.jpg"
import image2 from "../../Assets/features-2.jpg"
import image3 from "../../Assets/features-3.jpg"
import img from "../../Assets/section-heading-separetor.png"


const Service = () => {
  return (
    <div> 
      <Container>
        <Main>
          <Text>We are awesome</Text>
          <Description>Our Services</Description>
         <SmallImage>
         <img src={img} alt="" />
         </SmallImage>
          <CardHolder>
                <Div>
                <Box style={{ backgroundImage: `url(${image1})` }} />
                <Div1>
                <Text1>Loveth Johnson</Text1>
                <Button1 >
                CEO
                </Button1>
                </Div1>
                </Div>
                <Div>
                <Box style={{ backgroundImage: `url(${image2})` }} />  
                <Div1>
              <Text1>Aisha</Text1>
              <Button1 >
                MANAGER
                </Button1>
                </Div1>
               </Div>
               <Div>
            <Box style={{ backgroundImage: `url(${image3})` }} />
            <Div1>
            <Text1>Blessing</Text1>
            <Button1>SENIOR SPECALIST</Button1>
            </Div1>
          </Div>
          
          </CardHolder>
        </Main>
      </Container>
    </div>
  )
}

export default Service
const Button1 = styled.div`
padding: 10PX 20PX;
border-radius: 30PX;
color:white;
background-color: purple;
:hover{
  cursor: pointer;
  background-color: pink;
  transition: all 360ms;
}
`;
const Div1 = styled.div`
display: flex;
position: absolute;
bottom: 30PX;
left: 30%;
flex-direction: column;
align-items: center;

`
const Text1 = styled.div`
color:white;
font-size: 30px;
`;
const Div = styled.div`
display: flex;
position: relative;
`
const SmallImage = styled.div`
  width: 40px; 
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Description = styled.div`
font-size: 50px;
color:black;
`;
const Text = styled.div`
  font-size: 20px;
  font-family: "Niconne", cursive;
  margin-bottom: 5px;
  color:rgb(77,182,172);
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

const Box = styled.div`
  width: 350px;
  height: 400px;
  margin: 20px;
  padding: 20px;
 
`;

const CardHolder = styled.div`
  display: flex;
  align-items: flex-start; 
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 90px;
`;
