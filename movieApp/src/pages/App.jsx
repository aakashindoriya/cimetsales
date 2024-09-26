
import { Outlet, useLocation } from 'react-router-dom'
import {NavBar} from '../components/NavBar'
import { Box } from '@chakra-ui/react'

function App() {
  const {pathname}=useLocation()


  return (
    <Box bgGradient='linear(teal.100 0%, orange.100 25%, teal.300 100%)'>
      <NavBar pathname={pathname}/>
      <Outlet  />
    </Box>
  )
}

export default App
