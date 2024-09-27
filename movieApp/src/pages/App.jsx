
import { Outlet, useLocation } from 'react-router-dom'
import {NavBar} from '../components/NavBar'
import { Box } from '@chakra-ui/react'

function App() {
  const {pathname}=useLocation()


  return (
    <Box minH="100vh" bgGradient=''>
      <NavBar pathname={pathname}/>
      <Outlet  />
    </Box>
  )
}

export default App
