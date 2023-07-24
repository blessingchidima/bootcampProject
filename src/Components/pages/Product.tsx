
import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/section-heading-separetor.png"
import image1 from "../../Assets/product-img-1.png"
import image2 from "../../Assets/product-img-2.png"
import image3 from "../../Assets/product-img-3.png"
import image4 from "../../Assets/product-img-4.png"


const Product = () => {
  return (
    <div> 
      <Container>
        <Main>
          <Text>We are awesome</Text>
          <Description>Our product</Description>
         <SmallImage>
         <img src={img} alt="" />
         </SmallImage>
          <CardHolder>
                <Div>
                <Box style={{backgroundImage: `url(${image1})`} }   />
                <Div1>
                <Text1> Human hair</Text1>
                <Tex >
                $450
                </Tex>
                </Div1>
                </Div>
                <Div>
                <Box style={{ backgroundImage: `url(${image2})` }} />
                 <Div1>
              <Text1>Attachments</Text1>
              <Tex >
                $470
                </Tex>
                </Div1>
               </Div>
               <Div>
            <Box style={{ backgroundImage: `url(${image3})` }} /> 
             <Div1>
            <Text1>Makeup Kits</Text1>
            <Tex>$470</Tex>
            </Div1>
          </Div>
          <Div>
            <Box style={{ backgroundImage: `url(${image4})` }} /> 
             <Div1>
            <Text1>Fairness Beauty Cream</Text1>
            <Tex>$470</Tex>
            </Div1>
          </Div>
          
          </CardHolder>
        </Main>
      </Container>
    </div>
  )
}

export default Product
const Tex = styled.div`
margin-top: 20px;
font-size: 10px;
color:black;


`;
const Div1 = styled.div`
display: flex;
position: absolute;
/* bottom: 30PX; */
top:30px;
left: 30%;
flex-direction: column;
align-items: center;

`
const Text1 = styled.div`
color:black;
font-size: 20px;
  font-family: "Niconne", cursive;
  margin-top: 20px;
  

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
  /* margin-right: 20px; */
`;
const Description = styled.div`
font-size: 50px;
color:black;

`;
const Text = styled.div`
  font-size: 20px;
  font-family: "Niconne", cursive;
  margin-top: 5px;
  color:rgb(77,182,172);
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

 
`;

const Box = styled.div`
  width: 200px;
  height: 350px;
  margin: 20px;
   padding: 20px;
  background-repeat: no-repeat;
  background-position:center;
  border: 1px solid lightgray;


 
`;

const CardHolder = styled.div`
  display: flex;
  align-items: center; 

  
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 90px;

 
`;


