import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <header>
                <nav className=" col-10 mx-auto container-fluid ">
                    <div className="">
                        <div className="" id="navbarExample01">
                            <ul className=" navbar nav justify-content-end">
                                <li className="nav-item m-2 text-black">
                                    <NavLink exact activeClassName="menu" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item m-2 text-black">
                                    <NavLink exact activeClassName="menu " to="/about">About</NavLink>
                                </li>
                                <li className="nav-item m-2">
                                    <NavLink exact activeClassName="menu" to="/service">Service</NavLink>
                                </li>
                                <li className="nav-item m-2">
                                    <NavLink exact activeClassName="menu" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
