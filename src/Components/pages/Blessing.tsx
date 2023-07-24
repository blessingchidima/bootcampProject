import React from 'react'
import styled from 'styled-components';

import image1 from "../../Assets/gallery-V3-3.jpg"
import image2 from "../../Assets/gallery-V3-4.jpg"
import image3 from "../../Assets/gallery-V3-5.jpg"
import image4 from "../../Assets/gallery-V3-6.jpg"
import image5 from "../../Assets/gallery-V3-1.jpg"
import image6 from "../../Assets/gallery-V3-2.jpg"
import img from "../../Assets/section-heading-separetor.png"

const Blessing = () => {
  return (
    <div>
        <Container>
        <Main>
          <Text>We are awesome</Text>
          <Description>Photo Gallery</Description>
         <SmallImage>
         <img src={img} alt="" />
         </SmallImage>
        
          <CardHold>
            <Card style={{ backgroundImage: `url(${image1})` }} />
            <Card style={{ backgroundImage: `url(${image2})` }}/>
                
            
            <Card style={{ backgroundImage: `url(${image3})` }} />
               
            
            <Card style={{backgroundImage: `url(${image4})`}}/>
                
            
            <Card style={{backgroundImage: `url(${image5})`}}/>
              
            
            <Card style={{backgroundImage:`url(${image6})`}}/>
               
          
          </CardHold>
        </Main>
      </Container>
    </div>
  )
}

export default Blessing
const Card = styled.div`
    width: 300px;
    height: 280px;
    background-color: aliceblue;
    margin: 4px;
`

const CardHold = styled.div`
    
    width: 80%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
const Text = styled.div`
  font-size: 20px;
  font-family: "Niconne", cursive;
  margin-bottom: 5px;
  color:rgb(77,182,172);
`;




const SmallImage = styled.div`
  width: 40px; 
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-right: 20px; */
`;
const Description = styled.div`
font-size: 50px;
color:black;
`;


const Container = styled.div`
  width: 100%;
  height:700px;
  display: flex;
  justify-content: center;

 
`;





const Main = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  align-items: center;

  height: 100%;
`;
