import { Box, Skeleton, SkeletonText } from '@chakra-ui/react';

export const MovieCardSkeleton = () => {
  return (
    <Box
      w="250px"
      borderWidth="1px"
      borderRadius="20"
      overflow="hidden"
      bg="gray.900"
      color="white"
      shadow="lg"
      position="relative"
    >
      
      <Skeleton height="300px" width="100%" />
      
      
      <Box p="4">
      
        <Skeleton height="50px" width="50px" borderRadius="full" mb="4" />

    
        <SkeletonText mt="2" noOfLines={1} spacing="4" skeletonHeight="2" />

       
        <SkeletonText mt="2" noOfLines={1} spacing="4" skeletonHeight="2" />
      </Box>
    </Box>
  );
};
