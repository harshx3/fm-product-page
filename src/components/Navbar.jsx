import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="container mx-auto px-4 relative">
                <div className="flex justify-between items-center py-6">
                    <div className="flex items-center gap-12">
                        <div>
                            <NavLink to={"/"}> <img src="src/assets/logo.svg" alt="logo" /></NavLink>
                        </div>

                        <div className="flex gap-6">
                            <NavLink to={"/collections"}>Collections</NavLink>
                            <NavLink to={"/men's"}>Men</NavLink>
                            <NavLink to={"/women's"}>Women</NavLink>
                            <NavLink to={"/about"}>About</NavLink>
                            <NavLink to={"/contact"}>Contact</NavLink>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <img src="src/assets/icon-cart.svg" alt="cart" className="w-6 h-6" />
                        <img src="src/assets/image-avatar.png" alt="profile" className="w-10 h-10" />
                    </div>
                </div>

                {/* Horizontal Line */}
                <div className="absolute bottom-0 left-0 right-0">
                    <div className="h-[1px] bg-gray-200 w-full"></div>
                </div>
            </nav>
        </>

    )
};

export default Navbar;