import React from 'react'
import styled from 'styled-components'

import ima from "../../Assets/call-to-action.jpg"

const Beauty = () => {
  return (
    <div>
        <Container style={{backgroundImage: `url(${ima})`}}>
         <Main>
            <Div>
          <Text>Need An Awesome</Text>
          <Description><span>Beauty Service</span></Description>
          <Button>GET APPOINTMENT</Button>
       
          </Div>
          </Main>
        </Container>
    </div>
  )
}

export default Beauty
const Button=styled.div`
padding: 10PX 20PX;
border-radius: 30PX;
color:white;
background-color: rgb(227,189,168);
:hover{
  cursor: pointer;
  background-color:rgb(77,182,172) ;
  transition: all 360ms;
}
`
const Div=styled.div`
margin-top: 50px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
align-items: center;
`
const Description=styled.div`
width: 400px;
font-size: 50px;
color:black;


span{
    width: 200px;
}


`
const Text=styled.div`
 font-size: 30px;
  font-family: "Niconne", cursive;
  margin-top: 40px;
  color:rgb(77,182,172);
  
`
const Container=styled.div`
 width: 100%;
  height: 900px;
  background-size: cover;
  background-attachment:fixed ;
  display: flex;
  justify-content: center;
`

const Main =styled.div`
 width: 90%;
  display: flex;
  flex-direction: column;

  align-items: center;

  height: 100%;

`