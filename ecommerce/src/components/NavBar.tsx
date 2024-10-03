import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { conversionProvider } from '../context/ConversionContext';
import { GetConverTed } from '../actions/loaderFunctions';

const NavBar = () => {
  const { fillRates, handleConversion } = useContext(conversionProvider);

  async function setFillRates() {
    let data = await GetConverTed("https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD");
    data && fillRates(data);
  }

  useEffect(() => {
    setFillRates();
  }, []);

  return (
    <header>
      <nav className="bg-blue-500 p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <NavLink to="/">MyLogo</NavLink>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center">
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

          {/* Select Dropdown */}
          <li>
            <select
              aria-placeholder="select currency"
              onChange={(e) => handleConversion(e.target.value)}
              className="bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">USD</option>
              <option value="AUD">AUD</option>
              <option value="INR">INR</option>
              <option value="PHP">PHP</option>
              <option value="NZD">NZD</option>
            </select>
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
