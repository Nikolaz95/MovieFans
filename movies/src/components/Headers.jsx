

import React, { useState, useEffect } from 'react'
import { BsSearch } from 'react-icons/bs';

import { NavLink } from 'react-router-dom';


import Profile from '../assets/pictures/avatar-profile.jpg';

//icon import 
import { IoPersonCircleSharp } from "react-icons/io5";




const Headers = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState('');
    const handleLogin = () => {
        // Perform login actions, set isAuthenticated to true
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        // Perform logout actions, set isAuthenticated to false
        setIsAuthenticated(false);
        setDropDown(false); // Close the dropdown on logout
    };

    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const [dropDown, setDropDown] = useState(false);

    const toggleDropDown = () => {
        console.log('Toggling side menu');
        setDropDown(!dropDown);
    };



    const toggleSideMenu = () => {
        console.log('Toggling side menu');
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    useEffect(() => {
        const closeMenuOnOutsideClick = (e) => {
            if (dropDown) {
                const dropdownWrapper = document.querySelector('.dropdown-wrapper');
                const dropdownContent = document.querySelector('.dropdown-content');

                if (
                    dropdownWrapper &&
                    dropdownContent &&
                    !e.target.closest('.dropdown-wrapper') &&
                    !e.target.closest('.dropdown-content')
                ) {
                    setDropDown(false);
                }
            }
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
    }, [dropDown, isSideMenuOpen]);


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
                            <NavLink to="/tvshows">
                                TV Shows
                            </NavLink>
                        </li> */}

                        <li>
                            <NavLink to="/search">
                                Search
                            </NavLink>
                        </li>

                        {/* <li>
                            <NavLink to="/actorsPage">
                                Actors
                            </NavLink>
                        </li> */}

                        {/* <li>
                            <NavLink to="/logIn">
                                Register /Log in
                            </NavLink>
                        </li> */}



                        <li>
                            {isAuthenticated ? (
                                <div className="dropdown-wrapper">
                                    <div onClick={toggleDropDown} /* className='dropdown-conteiner' */>
                                        <NavLink to="#">
                                            <IoPersonCircleSharp /> {userName}
                                        </NavLink>
                                    </div>

                                    {dropDown && (
                                        <div className="dropdown-content">
                                            <NavLink to="/profile">Profile Account</NavLink>
                                            <NavLink to="/watchList">Your Wathlist</NavLink>
                                            <NavLink to="/favoritMovieTvShowList">Your Favorit</NavLink>
                                            <NavLink to="/update">Settings</NavLink>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <NavLink to="/logIn">Register / Log in</NavLink>
                            )}

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