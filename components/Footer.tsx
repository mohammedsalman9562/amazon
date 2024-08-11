import React from "react";
import logo from "../../e-commerce-web/images/logo.png"
import Image from "next/image"; 

const Footer =() =>{
    return(
        <div className="w-full h-20 bg-amazon_light text-gray-400 flex items-center
        justify-center gap-4">
            <Image className="w-24 mt-7" src={logo} alt="logo" />
            <p className="text-sm mt-4">All right reserved{""}
                <a className="hover:text-white hover:underline decoration-[1px]
                cursor-pointer duration-260">@Mohammed salman</a>
            </p>
        </div>
    );
}

export default Footer;