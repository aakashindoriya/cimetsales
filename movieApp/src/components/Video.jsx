import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

export const Video = ({ videoKey ,setPlay}) => {
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      position={"absolute"}
      top="0"
      left="0"
      backgroundColor={"black"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
     
      <Box 
      zIndex={"2"}
      pos={"absolute"}
      top={"10%"}
      left={"25%"}
      border={"1px solid red"}
      width={"50%"}
      height={"50vh"}
      >
         <Button  onClick={()=>setPlay(false)}>
        Close
      </Button>
        <iframe
          src={"https://www.youtube.com/embed/" + videoKey}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
          width={"100%"}
          height={"50vh"}
        />
      </Box>
    </Box>
  );
};
