import React from 'react'
import { NavLink } from 'react-router-dom';


/* css style */
import '../Profile/ProfileAccount.css';

import Profile from '../../../assets/pictures/avatar-profile.jpg';

const ProfileAccount = () => {
    return (
        <div className="content-Profile">
            <h1>Profile Account</h1>

            <div className="profile-navigation">
                <li>
                    <NavLink to="#">
                        Your profile
                    </NavLink>
                </li>

                <li>
                    <NavLink to="#">
                        Your watch list
                    </NavLink>
                </li>

                <li>
                    <NavLink to="#">
                        Your favorit
                    </NavLink>
                </li>

                <li>
                    <NavLink to="#">
                        Update Profile
                    </NavLink>
                </li>
            </div>

            <div className="account-content">
                <div className="accoutn-profileImg">
                    <img src={Profile} height={300} width={300} alt="Person" class="" />
                </div>

                <div className="account-info">
                    <p>Your User name:</p>
                    <p>JOE</p>
                </div>
            </div>
        </div>


    )
}

export default ProfileAccount