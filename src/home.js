import { useState } from 'react';
import {
    Box, 
    Input,
    Text
  } from '@chakra-ui/react'

const Home = () => {
    const [task, setTask] = useState("");
    return(
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <Text fontSize='5xl' color={"blue"}> Altius Hub </Text>  
        </Box>
    )
}

export default Home;