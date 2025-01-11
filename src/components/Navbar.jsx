import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
    const location = useLocation();
    const parentPath = location.pathname === "/" ? "" : location.pathname;
    const { addToCart } = useContext(AppContext);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="container mx-auto px-4 relative">
            {/* Main Navbar */}
            <div className="flex justify-between items-center py-6">
                {/* Left Section: Hamburger Menu (Mobile) */}
                <div className="sm:hidden">
                    <button onClick={() => setShowMenu(!showMenu)} className="focus:outline-none">
                        <img src="/src/assets/icon-menu.svg" alt="menu" className="w-6 h-6" />
                    </button>
                </div>

                {/* Logo */}
                <div className="flex-1 sm:flex-none flex justify-center sm:justify-start mr-4">
                    <NavLink to={"/"}>
                        <img src="/src/assets/logo.svg" alt="logo" className="h-8" />
                    </NavLink>
                </div>

                {/* Desktop Menu */}
                <div className="hidden sm:flex gap-6">
                    <NavLink to={"/collections"}>Collections</NavLink>
                    <NavLink to={"/men's"}>Men</NavLink>
                    <NavLink to={"/women's"}>Women</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </div>

                {/* Right Section: Cart and Profile Icons */}
                <div className="flex items-center gap-4 ml-auto">
                    <NavLink to={`${parentPath}/cart`}>
                        <img
                            onClick={() => addToCart()}
                            src="/src/assets/icon-cart.svg"
                            alt="cart"
                            className="w-6 h-6"
                        />
                    </NavLink>
                    <NavLink>
                        <img
                            src="/src/assets/image-avatar.png"
                            alt="profile"
                            className="w-10 h-10"
                        />
                    </NavLink>
                </div>
            </div>

            {/* Dropdown Menu for Mobile */}
            {showMenu && (
                <div className="absolute top-full left-0 w-full bg-white z-10 shadow-md sm:hidden">
                    <ul className="flex flex-col items-start p-4 space-y-2">
                        <NavLink to={"/collections"} onClick={() => setShowMenu(false)}>
                            Collections
                        </NavLink>
                        <NavLink to={"/men's"} onClick={() => setShowMenu(false)}>
                            Men
                        </NavLink>
                        <NavLink to={"/women's"} onClick={() => setShowMenu(false)}>
                            Women
                        </NavLink>
                        <NavLink to={"/about"} onClick={() => setShowMenu(false)}>
                            About
                        </NavLink>
                        <NavLink to={"/contact"} onClick={() => setShowMenu(false)}>
                            Contact
                        </NavLink>
                    </ul>
                </div>
            )}

            {/* Horizontal Line */}
            <div className="absolute bottom-0 left-0 right-0">
                <div className="h-[1px] bg-gray-200 w-full"></div>
            </div>
        </nav>


    );
};

export default Navbar;
