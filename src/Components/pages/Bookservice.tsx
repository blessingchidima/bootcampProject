import React from "react"
import styled from "styled-components";
import image5 from "../../Assets/before-after-1 (1).jpg"


const Bookservice=()=>{
    return(
    <div>
        <Container>
            <Main>
                <CardHolder>
                    <Left>
                    Our Secrets
                    <Description>Every Hair Strand And Body Type Has Thier Uniqueness & Tension Points - We Just Crack The Code</Description>
                     <div style={{display:"flex", alignItems: "center"}}>
                     <Button2>

                        BOOK SERVICE
                     </Button2>
                     </div>
                    </Left>
                    
                    <Right>
                    <Card>
                        
                        <Box src={image5} />
                       
                    </Card>

                    </Right>

                </CardHolder>
            </Main>
        </Container>
    </div>
    )
}

export default Bookservice
const Button2=styled.div`
/* height: 50px;
width:200px; */
padding: 5PX 10PX;
font-size: 20px;
border-radius: 20PX;
background-color: rgb(77,182,172);
margin: 20px;
`
const Description=styled.div`
font-size: 15px;
margin:20px;
`
const Left=styled.div`
font-size: 40px;
width: 40%;
margin: 30px;
display: flex;
flex-direction: column;
`
const Right=styled.div`
width: 50%;
`
const Container=styled.div`
width:100%;
height:80%;
display:flex;
justify-content: center;
align-items: center;
background-color: rgb(238,242,245);
margin-bottom: 80px;
`;
const Main=styled.div`
width:80%;
height:88%;
display: flex;
justify-content: center;
align-items: center;
`;
const CardHolder=styled.div`
display:flex;
width:100%;
justify-content: space-between;
align-items: center;

`;
const Card=styled.div`
  width: 300px;
  height: 400px;
  margin: 20px;
 display: flex;
`;

const Box =styled.img`
  width: 350px;
  object-fit: cover;
`;