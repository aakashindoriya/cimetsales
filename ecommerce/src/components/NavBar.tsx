import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { conversionProvider } from '../context/ConversionContext';
import { GetConverTed } from '../actions/loaderFunctions';

const NavBar = () => {
  const {fillRates} =useContext(conversionProvider)
  async function setFillRates(){
   let data=await GetConverTed("https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD")
    data&&fillRates(data)
  }

  useEffect(()=>{
   setFillRates()
  },[])
  return (
    <header>
      <nav className="bg-blue-500 p-4 flex justify-between items-center sticky top-0">
        <div className="text-white text-xl font-bold">
          <NavLink to="/">MyLogo</NavLink>
        </div>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-gray-200 font-bold" : "text-white hover:text-gray-200"
              }
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "text-gray-200 font-bold" : "text-white hover:text-gray-200"
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-gray-200 font-bold" : "text-white hover:text-gray-200"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-gray-200 font-bold" : "text-white hover:text-gray-200"
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
