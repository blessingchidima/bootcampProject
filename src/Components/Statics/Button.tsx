import React from "react";
import styled from "styled-components";

interface iBtn {
    title?: string;
    fs?: string;
    w?: string;
  }

const Button:React.FC<iBtn>=({title,fs, w})=>{

    return(
        <div>
            <Container w={`${w}`} fs={`${fs}`}>
           {title}
            </Container>
          
        </div>
    )

}

export default Button
const Container=styled.div<{
 fs?:string;
 w?:string;
}>`

width:${({w})=>w};
padding:20px;
margin: 20px;
background-color: rgb(241, 179, 145);
cursor: pointer;
border-radius:20px;
display: flex;
justify-content:center;
align-items:center;
font-size:${({fs})=>(fs?"14px" :"20px")};

:hover{
    background-color: rgb(77,182,172);
  
    cursor: pointer;
    transition: all 360ms;
}
`;
