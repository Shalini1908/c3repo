import React from 'react';
import {Box,  Text, Container , Heading} from "@chakra-ui/react";

const Experience = ({data}) => {
  return (
    <Box style={{backgroundColor:"#2d3748" , width:"40%" , fontSize:"12px" ,marginLeft:"10%", marginTop:"20px",padding:"5px"}}>
    <Container mt={6} fontSize={14}>
  <Heading fontSize={"15px"}>1 {data.bio} at {data.company}</Heading>
  <p>October 2021 -Present</p>
  
    </Container>
  
    <Container mt={6} fontSize={14}>
  <Text> 2 Senior Software Engineer at Swiggy</Text>
  <p>November 2020 - September 2021</p>
  
    </Container>
  
    <Container mt={6} fontSize={14}>
  <Text> 3 Senior Software Engineer at Globant</Text>
  <p>September 2019 - November 2020</p>
  
    </Container>
  
    <Container mt={6} fontSize={14}>
  <Text> 4 Senior Software Engineer at Confluxsys</Text>
  <p>June 2017 - September 2019</p>
  
    </Container>
  
  
  </Box>
  )
}

export default Experience;

export async function getStaticProps(){
    let r = await fetch (`https://api.github.com/users/Shalini1908`);
    let d = await r.json();
    return {
      props:{
        data :d,
      }
    }
    
    }