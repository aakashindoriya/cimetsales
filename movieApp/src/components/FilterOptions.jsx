import { Box, Flex, Select } from '@chakra-ui/react'
import React from 'react'

export const FilterOptions = ({handleSort}) => {
  return (
    <Flex >
        <Select onChange={handleSort} variant='outline' borderColor={"teal"} color={"teal"}>
            <option value="">All</option>
            <option value="popularity.desc">Popularity Descending</option>
            <option value="popularity.asc">Popularity Ascending</option>
        </Select>
    </Flex>
  )
}
