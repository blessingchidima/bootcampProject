import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/get_appoinment.jpg"

const Appointment = () => {
  return (
    <div>
        <Container style={{backgroundImage : `url(${img})`}}>
          <Main>
            <First>
            We Are Awesome
            </First>
            <Third> Get Appoinment</Third>
            <Second>
              <Head></Head>
             <Box3>
             <Box>
            <Text>Please configure first services from admin area</Text>
            <Description>Personal Information</Description>
            <Div>
              <Button>Existing Customer</Button>
            <Button>New Customer</Button>
            <Button>Guest Customer</Button>
            <Button>New Customer</Button>

            <First></First>
            </Div>
            
           </Box>
           <Box2>
           <Contact>
          <h4>CONTACT US</h4>
          <Name>
          <Text>Name</Text>
          <input type="text=" placeholder='Name'/>
          </Name>
          <Name>
          <Text>Email</Text>
          <input type="text=" placeholder='Name'/>
          </Name>
          <Name>
          <Text>Email</Text>
          <textarea  placeholder='Name'/>
          </Name>
           </Contact>
           </Box2>
             </Box3>
           <Box4>
            <Text1></Text1>
           <input type='text' placeholder=''/>
           <Text1></Text1>
           <input type='text' placeholder=''/>
         <But>
          <Text2>Login</Text2>
         </But>


           </Box4>
      </Second>
         
           
          </Main>
        </Container>
    </div>
  )
}

export default Appointment
const Text2=styled.div`
font-size: 20px;
text-align: center;
`
const But=styled.div`
padding: 5px;
width:500px;
margin-top: 20px;
border-radius: 12PX;
color:white;
background-color: rgb(80,171,163);

:hover{
  background-color: black;
}
`
const Text1=styled.div`
font-size: 5px;
padding-top:25px;

`
const Box4=styled.div`
margin:20px;
height: 300px;
width: 50%;
border-radius: 10px;
border:1px solid lightgrey;
padding-left: 20px;
margin-top: 30px;


input{
  width:90%;
  height:50px;
  outline: none;
  padding-left:12px;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin-top: 7px;
}
`
const Name=styled.div`
width:100%;
flex-direction: column;
input{
  width:90%;
  height:50px;
  outline: none;
  padding-left:12px;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin-top: 7px;
}

textarea{
  width:92%;
  outline: none;
   border-radius: 5px;
  border: 1px solid lightgray;
  margin-top: 7px;
}
`
const Contact=styled.div`
width:350px;
flex-direction: column;
background-color: white;
border-radius: 15px;
padding: 12px;
overflow: hidden;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
h4{
  margin:0;
  font-size: 15px;
  border-bottom: 1px solid lightgray;
  width:100%;
  padding:20px
}

`
const Third=styled.div`
font-size: 20px;
margin-top: 10px;
`
const Div=styled.div`
width:100%;
display: flex;
justify-content: space-between;
flex-wrap:wrap;
margin-top: 20px;

`
const Box3=styled.div`
width: 100%;
background-color:rgb(243,243,243);
/* flex-direction: column; */
display: flex;
`
const Button=styled.button`
font-size: 20px;
width:290px;
height:75px;
border-radius: 16PX;
background-color: white;
margin-bottom: 30px;


`
const Description=styled.div`
font-size: 20px;
padding-top:30px;
`
const Text=styled.div`
font-size: 22px;
padding-top:25px;
font-size: 14px;
`
const Box2=styled.div`
margin:30px;
height: 300px;
width: 35%;
flex-direction: column;
/* background-color: green; */
margin-top: 30px;
`
const Box=styled.div`
margin:20px;
height: 100%;
width: 50%;
padding-left: 20px;
margin-top: 30px;

`
const Second=styled.div`

background-color: rgb(255,255,255);

font-size: 30px;
padding-top: 20px;

min-height: 1000px;
width: 100%;
`

const First=styled.div`
display: flex;
align-items: center;
justify-content: center;

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
padding-bottom: 150px;
  background-size: cover;
  background-attachment:fixed ;
  /* margin-top: 300px; */
  display: flex;
  align-items: center;
  justify-content: center;
  `;

const Head = styled.div`
  width: 100%;
  height: 50px;
  background-color:whitesmoke;
`