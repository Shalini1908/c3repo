
import Image from 'next/image'
import {Box, Heading , Flex , Text, Button , Container} from "@chakra-ui/react";
import {AiOutlineFolder , AiOutlineStar} from "react-icons/ai";
import {BiGitRepoForked} from "react-icons/bi";
import Link from "next/link";


export default function Home({data}) {
  console.log(data)
  return (
    <>
  <Box bg={'#171923'} mt={4} h={"110vh"}>
<Box key ={data.id} style={{backgroundColor:"#2d3748" , width:"300px"}}>
<Image src={data.avatar_url} width={100} height={100} alt="avatar" style={{borderRadius:"50%" , marginLeft:"30%"}}/>
<Heading  ml={"30%"} fontSize={16}>{data.name}</Heading>
<p style={{marginLeft:"30%"}}>@Shalini1908</p>
<Box>
<Flex>
<Text>Full-stack Developer | FOSS | JavaScript | Typescript | </Text>

</Flex>
<Text>NodeJS | Deno | ReactJS | HTML | CSS | Chakra-UI | MUI</Text>

</Box>

<Box>
  <Link href="https://github.com/Shalini1908"><Button style={{width:"150px" ,height:"30px" , borderRadius:"15px" ,backgroundColor:"#9ae6b4", color:"#171923"}}>Resume</Button></Link>
<Link href="https://github.com/Shalini1908"><Button  style={{width:"150px" ,height:"30px",borderRadius:"15px" , backgroundColor:"#90cdf4",color:"#171923"}}>Follow</Button></Link>


</Box>

</Box>

    
    <Box style={{backgroundColor:"#2d3748" , width:"300px" , fontSize:"12px" , textAlign:"center" , justifyContent:"center"}}>
    <Box style={{display:"flex" , marginTop:"10px"}}>
    <Box bg={"#3b535f"} w={100} h={30} m={1} >TYPESCRIPT</Box>
    <Box  bg={"#3b535f"} w={100} h={30} m={1} >REACT.JS</Box>

<Box  bg={"#3b535f"} w={100} h={30} m={1} >NODE.JS</Box>
<Box  bg={"#3b535f"} w={100} h={30} m={1} >DENO</Box>
</Box>
<Box  style={{display:"flex"}}>
  <Box  bg={"#3b535f"} w={100} h={30} m={1} >MONGODB</Box>
<Box  bg={"#3b535f"} w={100} h={30} m={1} >POSTGRESQL</Box>
<Box  bg={"#3b535f"} w={100} h={30} m={1} >GIT</Box>
</Box>
<Box style={{display:"flex"}}>
<Box  bg={"#3b535f"} w={200} h={30}m={1}  >REACTNATIVE</Box>
<Box  bg={"#3b535f"} w={200} h={30} m={1} >CHAKRA-UI</Box>
<Box  bg={"#3b535f"} w={100} h={30}m={1} >CSS</Box>
<Box  bg={"#3b535f"} w={100} h={30} m={1} >ANTD</Box>
</Box>
<Box style={{display:"flex"}}>
<Box  bg={"#3b535f"} w={100} h={30}m={1} >TAILWIND</Box>
<Box  bg={"#3b535f"} w={100} h={30} m={1} >MUI</Box>
</Box>
</Box>
{/* experience */}
<Box style={{backgroundColor:"#2d3748" , width:"300px" , fontSize:"12px"}}>
  <Container mt={2} fontSize={14}>
<Text> 1 {data.bio} at {data.company}</Text>
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
</Box>
{/* project */}
<Box bg={'#171923'} mt={"-53.5%"} w={"70%"} height={"660px"} display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} ml={"25%"}>
<Box style={{backgroundColor:"#2d3748" , border:"1px solid teal" , padding:"10px" }} >
    
<div  style={{  width:"60%" , height:"50%"}}>

  <Link href="https://github.com/Shalini1908?tab=repositories"><Flex><AiOutlineFolder/><Text ml={"5px"}>stargit</Text></Flex></Link>
  <p style={{marginTop:"10px"}}>Shalini1908/stargit</p>
  <Flex mt={"10px"}>
  <Flex ><AiOutlineStar/> <p>0</p></Flex>
  <Flex ><BiGitRepoForked/> <p>0</p></Flex>
  </Flex>

  <Box>
  <Text  >CSS</Text>

  </Box>

  </div>
 
  </Box>

  <Box style={{backgroundColor:"#2d3748" , border:"1px solid teal" , padding:"10px" }} >
    
    <div  style={{  width:"60%"}}>
    
      <Link href="https://github.com/Shalini1908?tab=repositories"><Flex><AiOutlineFolder/><Text ml={"5px"}>star</Text></Flex></Link>
      <p style={{marginTop:"10px"}}>Shalini1908/star</p>
      <Flex mt={"10px"}>
      <Flex ><AiOutlineStar/> <p>0</p></Flex>
      <Flex ><BiGitRepoForked/> <p>0</p></Flex>
      </Flex>
    
      <Box>
      <Text  >CSS</Text>
    
      </Box>
    
      </div>
     
      </Box>

      <Box style={{backgroundColor:"#2d3748" , border:"1px solid teal" , padding:"10px" }} >
    
<div  style={{  width:"60%"}}>

  <Link href="https://github.com/Shalini1908?tab=repositories"><Flex><AiOutlineFolder/><Text ml={"5px"}>next-js-deploy</Text></Flex></Link>
  <p style={{marginTop:"10px"}}>Shalini1908/next-js-deplo</p>
  <Flex mt={"10px"}>
  <Flex ><AiOutlineStar/> <p>0</p></Flex>
  <Flex ><BiGitRepoForked/> <p>0</p></Flex>
  </Flex>

  <Box>
  <Text  >CSS</Text>

  </Box>

  </div>
 
  </Box>

  <Box style={{backgroundColor:"#2d3748" , border:"1px solid teal" , padding:"10px" }} >
    
<div  style={{  width:"60%"}}>

  <Link href="https://github.com/Shalini1908?tab=repositories"><Flex><AiOutlineFolder/><Text ml={"5px"}>ga-todo-app</Text></Flex></Link>
  <p style={{marginTop:"10px"}}>Shalini1908/ga-todo-app</p>
  <Flex mt={"10px"}>
  <Flex ><AiOutlineStar/> <p>0</p></Flex>
  <Flex ><BiGitRepoForked/> <p>0</p></Flex>
  </Flex>

  <Box>
  <Text  >JavaScript</Text>

  </Box>

  </div>
 
  </Box>

  <Box style={{backgroundColor:"#2d3748" , border:"1px solid teal" , padding:"10px" }} >
    
<div  style={{  width:"60%"}}>

  <Link href="https://github.com/Shalini1908?tab=repositories"><Flex><AiOutlineFolder/><Text ml={"5px"}>Shalini1908.github.io</Text></Flex></Link>
  <p style={{marginTop:"10px"}}>Shalini1908/Shalini1908.github.io</p>
  <Flex mt={"10px"}>
  <Flex ><AiOutlineStar/> <p>1</p></Flex>
  <Flex ><BiGitRepoForked/> <p>0</p></Flex>
  </Flex>

  <Box>
  <Text  >CSS</Text>

  </Box>

  </div>
 
  </Box>

  <Box style={{backgroundColor:"#2d3748" , border:"1px solid teal" , padding:"10px" }} >
    
<div  style={{  width:"60%"}}>

  <Link href="https://github.com/Shalini1908?tab=repositories"><Flex><AiOutlineFolder/><Text ml={"5px"}>-faithful-gun-126</Text></Flex></Link>
  <p style={{marginTop:"10px"}}>Shalini1908/-faithful-gun-126</p>
  <Flex mt={"10px"}>
  <Flex ><AiOutlineStar/> <p>3</p></Flex>
  <Flex ><BiGitRepoForked/> <p>0</p></Flex>
  </Flex>

  <Box>
  <Text  >HTML</Text>

  </Box>

  </div>
 
  </Box>

  <Box style={{backgroundColor:"#2d3748" , border:"1px solid teal" , padding:"10px" }} >
    
<div  style={{  width:"60%"}}>

  <Link href="https://github.com/Shalini1908?tab=repositories"><Flex><AiOutlineFolder/><Text ml={"5px"}>Shalini1908</Text></Flex></Link>
  <p style={{marginTop:"10px"}}>Shalini1908/Shalini1908</p>
  <Flex mt={"10px"}>
  <Flex ><AiOutlineStar/> <p>0</p></Flex>
  <Flex ><BiGitRepoForked/> <p>0</p></Flex>
  </Flex>

  <Box>
  <Text  >CSS</Text>

  </Box>

  </div>
 
  </Box>

  <Box style={{backgroundColor:"#2d3748" , border:"1px solid teal" , padding:"10px" }} >
    
<div  style={{  width:"60%"}}>

  <Link href="https://github.com/Shalini1908?tab=repositories"><Flex><AiOutlineFolder/><Text ml={"5px"}>test</Text></Flex></Link>
  <p style={{marginTop:"10px"}}>Shalini1908/test</p>
  <Flex mt={"10px"}>
  <Flex ><AiOutlineStar/> <p>0</p></Flex>
  <Flex ><BiGitRepoForked/> <p>0</p></Flex>
  </Flex>

  <Box>
  <Text  >CSS</Text>

  </Box>

  </div>
 
  </Box>

  <Box style={{backgroundColor:"#2d3748" , border:"1px solid teal" , padding:"10px" }} >
    
<div  style={{  width:"60%"}}>

  <Link href="https://github.com/Shalini1908?tab=repositories"><Flex><AiOutlineFolder/><Text ml={"5px"}>git_we</Text></Flex></Link>
  <p style={{marginTop:"10px"}}>Shalini1908/git_we</p>
  <Flex mt={"10px"}>
  <Flex ><AiOutlineStar/> <p>0</p></Flex>
  <Flex ><BiGitRepoForked/> <p>0</p></Flex>
  </Flex>

  <Box>
  <Text  >CSS</Text>

  </Box>

  </div>
 
  </Box>


 
</Box> 
    </>
  )
}

export async function getServerSideProps(){
let r = await fetch (`https://api.github.com/users/Shalini1908`);
let d = await r.json();
return {
  props:{
    data :d,
  }
}

}