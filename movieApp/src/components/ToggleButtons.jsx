import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ToggleButtons = ({selected,setSelected,first,second}) => {

  const handleToggle = (value) => {
    setSelected(value);
  };

  return (
    <Box
      position="relative"
      w="120px" 
      h="40px" 
      p="1"
      bg="gray.700"
      borderRadius="full" 
    >
      <MotionBox
        position="absolute"
        top="0"
        left={selected ? '0' : '50%'}
        h="100%"
        w="50%"
        bg={useColorModeValue('blue.500', 'blue.300')}
        borderRadius="full"
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />

      <Flex justify="space-between" align="center" position="relative" zIndex="1" h="100%">
        <Button
          flex="1"
          onClick={() => handleToggle(true)}
          color={selected? 'white' : 'gray.400'}
          variant="unstyled"
          fontSize="sm" 
          h="100%"
          borderRadius="full" 
          display="flex"
          justifyContent="center"
          alignItems="center" 
        >
          {first}
        </Button>
        <Button
          flex="1"
          onClick={() => handleToggle(false)}
          color={selected? 'white' : 'gray.400'}
          variant="unstyled"
          fontSize="sm" 
          h="100%"
          borderRadius="full" 
          display="flex"
          justifyContent="center"
          alignItems="center" 
        >
          {second}
        </Button>
      </Flex>
    </Box>
  );
};

export default ToggleButtons;
