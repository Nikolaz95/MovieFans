

import React, { useState, useEffect } from 'react'
import { BsSearch } from 'react-icons/bs';

import { NavLink } from 'react-router-dom';


const Headers = () => {

    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const toggleSideMenu = () => {
        console.log('Toggling side menu');
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    useEffect(() => {
        const closeMenuOnOutsideClick = (e) => {
            if (isSideMenuOpen) {
                if (!e.target.closest('.navbar') && !e.target.closest('.ham-menu')) {
                    setIsSideMenuOpen(false);

                } else {

                }
                document.querySelector(".content-body").classList.add("content_body_top_30");

            } else {
                document.querySelector(".content-body").classList.remove("content_body_top_30");

            }

        };

        // Attach the event listener
        document.addEventListener('click', closeMenuOnOutsideClick);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', closeMenuOnOutsideClick);
        };
    }, [isSideMenuOpen]);


    return (
        <header>
            <div className="content-header">

                <NavLink href="/" className="logo no-underline">
                    <img src="" alt="" />
                    <p className='title-name'>Movie Lovers</p>
                </NavLink>


                <div className={`navbar ${isSideMenuOpen ? 'active' : 'close'}`} >
                    <ul>

                        <li>
                            <NavLink to="/movies">
                                Movies
                            </NavLink>
                        </li>

                        {/* <li>
                            <NavLink to="/tvShows">
                                TV Shows
                            </NavLink>
                        </li> */}

                        <li>
                            <NavLink to="/search">
                                Search
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/logIn">
                                Register /Log in
                            </NavLink>
                        </li>

                    </ul>
                </div>

                <div className={`ham-menu ${isSideMenuOpen ? 'active' : ''}`} onClick={toggleSideMenu}>
                    <span className="bar1"></span>
                    <span className="bar2"></span>
                    <span className="bar3"></span>
                </div>

            </div>
        </header>
    )
}

export default Headers