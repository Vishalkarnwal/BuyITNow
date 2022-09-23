import React from "react";

function Footer(data){
    return(
<div className=" bg-gray-700  flex flex-col">
        

           <a  href="">
               <img class="rounded-lg h-16 w-48 object-cover m-2" src={data.logo} alt=""/>
            </a> 
            <div className="text-center mb-5 block"> <h1 className="text-white text-center">Copyright © 2022 |</h1></div>
           
          
     
</div>

    );
}
export default Footer;