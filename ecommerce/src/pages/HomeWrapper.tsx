import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar.tsx'
import { useEffect } from 'react'
import { GetConverTed } from '../actions/loaderFunctions.ts'
import Footer from '../components/Footer.tsx'

const HomeWrapper = () => {
  useEffect(()=>{
    GetConverTed("https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP")
  },[])
  return (
    <>
        <NavBar />
        <Outlet />
        <Footer />
    </>
  )
}

export default HomeWrapper


