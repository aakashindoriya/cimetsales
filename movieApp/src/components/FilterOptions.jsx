import { Box, Select } from '@chakra-ui/react'
import React from 'react'

export const FilterOptions = ({handleSort}) => {
  return (
    <Box>
        <Select onChange={handleSort}>
            <option value="">All</option>
            <option value="popularity.desc">Popularity Descending</option>
            <option value="popularity.asc">Popularity Ascending</option>
        </Select>
    </Box>
  )
}
