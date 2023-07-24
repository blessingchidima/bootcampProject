import React from 'react'
import styled from 'styled-components'
import imag from "../../Assets/testimonial-bg.jpg"

const Gen = () => {
  return (
    <div>
        <Container style ={{backgroundImage:`url(${imag})`}}>
            <Main>
                <Black>
                    <h1>jenny smith</h1>
                    <div>
                        <Text>the absolute loved experience 
                          at the salon! the <br/>skill stuff and relaxing atomostpere made me feel pampered .</Text>
                    </div>
                </Black>
            </Main>
        </Container>
    </div>
  )
}

export default Gen
const Text=styled.div`
font-size: 25px;
  color:white;
`
const Black=styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 0;
    color: #fff;
    font-family: "Niconne", cursive;
  }

`
const Main=styled.div`
height: 90%;
width: 80%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Container=styled.div`
 width: 100%;
  height: 900px;
  background-size: cover;
  background-attachment:fixed ;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`