import React from 'react'
import { NavLink } from 'react-router-dom';

/* css style */
import '../Profile/NavLingProfileAccount.css';



const NavLinProfileAccount = () => {
    return (
        <div className="profile-navigation">
            <li>
                <NavLink to="/profile">
                    Your profile
                </NavLink>
            </li>

            <li>
                <NavLink to="/watchList">
                    Your watch list
                </NavLink>
            </li>

            <li>
                <NavLink to="/favoritMovieTvShowList">
                    Your favorit movie/Tv Show
                </NavLink>
            </li>

            <li>
                <NavLink to="/favoritActor">
                    Your favorit actor
                </NavLink>
            </li>

            <li>
                <NavLink to="/update">
                    Update Profile
                </NavLink>
            </li>
        </div>
    )
}

export default NavLinProfileAccount