import React from 'react';
import {Box , Text , Flex } from "@chakra-ui/react";
import Link from "next/link";
import {AiOutlineFolder , AiOutlineStar} from "react-icons/ai";
import {BiGitRepoForked} from "react-icons/bi";


const Projects = ({data}) => {
    // console.log(data.items)
    return (
      <>

<Box bg={'#171923'} mt={4}   margin={"auto"}w={"70%"} height={"660px"} display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}color={"white"}>

{data.items.map((el)=>(
   
 <Box key ={el.id} style={{backgroundColor:"#2d3748" , border:"1px solid teal" , padding:"10px" }} >
    
<div  style={{  width:"60%"}}>

  <Link href="https://github.com/Shalini1908?tab=repositories"><Flex><AiOutlineFolder/><Text ml={"5px"}>{el.name}</Text></Flex></Link>
  <p style={{marginTop:"10px"}}>{el.full_name}</p>
  <Flex mt={"10px"}>
  <Flex ><AiOutlineStar/> <p>{el.stargazers_count}</p></Flex>
  <Flex ><BiGitRepoForked/> <p>{el.forks}</p></Flex>
  </Flex>

  <Box>
  <Text  >{el.language}</Text>

  </Box>

  </div>
 
  </Box>


))}
 
</Box> 
   </>
    )
}

export default Projects;

export async function getStaticProps(){
let r = await fetch(`https://api.github.com/search/repositories?q=user:Shalini1908+fork:true&sort=updated&per_page=10&type=Repositories`)
let d = await r.json();
return {

    props:{
        data :d,
    }
}
}