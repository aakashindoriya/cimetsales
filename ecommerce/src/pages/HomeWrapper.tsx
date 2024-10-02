import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar.tsx'

const HomeWrapper = () => {
  return (
    <>
        <NavBar />
        <Outlet />
        <h1>footer</h1>
    </>
  )
}

export default HomeWrapper