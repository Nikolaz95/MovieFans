import React from 'react'
/* import { NavLink } from 'react-router-dom'; */


/* css style */
import '../Profile/ProfileAccount.css';

import Profile from '../../../assets/pictures/avatar-profile.jpg';
import NavLinProfileAccount from './NavLinProfileAccount';

const ProfileAccount = () => {
    return (
        <div className="content-Profile">
            <h1>Profile Account</h1>

            <NavLinProfileAccount />

            <div className="account-content">
                <div className="accoutn-profileImg">
                    <img src={Profile} height={300} width={300} alt="Person" className="Profileimg" />
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