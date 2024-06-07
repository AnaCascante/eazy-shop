

import { useState } from "react";

import Logo from "../Logo"; // Import the Logo component
import NavBar from "../NavBar";
import OpenCard from "../OpenCard";
import { FaShoppingCart } from "react-icons/fa";

export default function Header () {
    return (
        <header className="bg-dark-background sticky top-0 z-[20] mx-auto flex w-full items-center justify-between" >
        <>   
        <Logo/>
        <NavBar/>
        <OpenCard/>
        </>
        </header>
    )
}

