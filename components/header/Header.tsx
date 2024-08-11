import React from "react";
import Image from "next/image";
import logo from "../../images/logo.png";
import carts from "../../images/carts.png"

import { CiLocationOn } from "react-icons/ci";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import Link from "next/link";

const Header =() =>{
    return (
        <div className="w-full 
        h-20  
        bg-amazon_blue 
        text-lightText 
        sticky 
        top-0 
        
        rz-50">
            <div className="h-full  
            w-full  
            mx-auto  
            inline-flex 
            items-center 
            justify-between 
            gap-1 
            mdl:gap-3 
            p-4" >
            {/*logo*/}
            <Link href={"/"} className="px-2 border 
            border-transparent hover:border-white 
            cursor-pointer 
            duration-300 
            items-center 
            justify-center
            h-14 w-35">
                <Image className="w-28 object-cover" src={logo} alt={"logoimg"}/>
            </Link>
            {/*delivery*/}
            <div className="px-2 border 
            border-transparent hover:border-white 
            cursor-pointer 
            duration-300 
            items-center 
            justify-center
            h-14 w-35">
                <CiLocationOn />
                <div className="text-xs">
                    <p>Deliver to</p>
                    <p className="text-white 
                    font-bold 
                    uppercase">
                        India</p>
                </div>
            </div>
            {/*searchbar*/}
            <div className="flex-1 h-10 hidden md:inline-flex items-center
            justify-between relative">
                <input className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none
                focus-visible:border-amazon_yellow" type="text" placeholder="Search amazon products"/>
                <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex
                items-center justify-center absolute right-0 rounded-md rounded-br-md">
                    <HiOutlineSearch/>
                </span>
            </div>
            {/*signin*/}
            <div className="px-2 border 
            border-transparent hover:border-white 
            cursor-pointer 
            duration-300 
            items-center 
            justify-center
            h-14 w-35">
                <p>Hello, sign in</p>
                <p className="text-white font-bold flex items-center ">Account & Lists{""}
                    <span><BiCaretDown/></span>
                </p>
            </div>
            {/*favorite*/}
            <div className="px-2 border 
            border-transparent hover:border-white 
            cursor-pointer 
            duration-300 
            items-center 
            justify-center
            h-14 w-35">
                <p>Marked</p>
                <p className="text-white font-bold flex items-center ">& Favorites</p>
            </div>
            {/*cart*/}
                <Link href={"/cart"} className="flex px-2 border 
            border-transparent hover:border-white 
            cursor-pointer 
            duration-300 
            items-center 
            justify-center
            h-14 w-35">
                <Image className="w-[42px] object-cover h-[36px]" src={carts} alt="cartimg"/>
                    <p className="absolute text-ml text-amazon_yellow -translate-x-4 top-[25%]">
                0</p>
                <p className="text-ml text-white font-bold mt-3">Cart</p>
                </Link>
            
            </div>
        </div>
    );
}
export default Header;