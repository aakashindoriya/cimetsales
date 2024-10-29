import { FaAngleDown } from "react-icons/fa";
import buyimage from "../assets/buy.png"
export const Navbar = () => {
  return (
    <div 
    className='bg-white h-12 px-2 py-1 border-2 border-black'>
        <div className='w-[75%] mx-auto flex items-center justify-between'>
            
                <span className='font-sans text-3xl '>reMarkable</span>
                <div className='w-[31rem] flex  text-sm justify-between'>
                    <div className="flex items-center"><a href='id'>about remarkable 2 </a> <FaAngleDown /></div>
                    <div className="flex items-center"><a href='id'>shop</a> <FaAngleDown /></div>
                    <div className="flex items-center"><a href='id'>for business</a> </div>
                    <div className="flex items-center"><a href='id'>FAQ & Surport </a></div>

                </div>
                <button className="w-32 bg-[#CB7428] p-2 border-1 rounded-full"><img className="w-20 h-4 m-auto" src={buyimage} /></button>
        </div>
    </div>
  )
}
