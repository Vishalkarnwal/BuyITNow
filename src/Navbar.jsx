import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from 'react-router-dom';


function Navbar({ productCount }) {
  return (
    <nav class="bg-white shadow">
      <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div class="flex justify-between items-center">
          <div>
            <img className="h-16"
              src="https://media.discordapp.net/attachments/999601406514298951/1021644432170303498/Beige_Ivory_Minimalist_Floral_and_Botanical_Woman_Logo_1.png" />
          </div>


          <div class="flex md:hidden">
            <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>


        <div class="md:flex items-center">
          <div class="flex flex-col md:flex-row md:mx-6">
            <Link class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" to="/products">Shop</Link>
            <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Contact</a>
            <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">About</a>
          </div>

          <div class="flex justify-center md:block mb-12">
            <a class=" text-gray-700 hover:text-gray-600" href="#">
              <div className=" flex flex-col items-center">
                <span className="text-6xl text-red-500 ">
                  <AiOutlineShopping />
                </span>
                <span className="-m-9"> {productCount}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>



  );
}
export default Navbar;











{/* <div className="bg-white">
        <nav class="relative flex flex-wrap items-center justify-between px-2 py-3">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block 
             lg:justify-start">
           <a  href="">
               <img class="rounded-lg h-20 w-60 object-cover animate-pulse" src={data.logo} alt=""/>
            </a> 
           
          </div>
        </div>
      </nav>
       </div> */}