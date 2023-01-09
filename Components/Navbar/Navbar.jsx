import React from 'react';
import {Box} from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>

  <Box bg={"#171923"} color={"white"} h={"50px"} padding={'10px'}>
  <Link href="/" style={{margin:"25px",fontSize:"20px",}}>Shalini Singh</Link>
  <Link href="/projects" style={{margin:"25px",fontSize:"20px",}}>Projects</Link>
  <Link href="/experience" style={{margin:"25px",fontSize:"20px",}}>Experience</Link>

  </Box>
    </div>
  )
}

export default Navbar