import React, { useEffect, useState } from 'react'
import NavLinProfileAccount from './NavLinProfileAccount';
import { useLocation } from 'react-router-dom';


/* css style */
import '../Profile/ProfileAccount.css';

import Profile from '../../../assets/pictures/avatar-profile.jpg';

const ProfileAccount = () => {
    const location = useLocation();
    const { userName } = location.state || {};
    return (
        <div className="content-Profile">
            <h1>Profile Account</h1>

            <NavLinProfileAccount />

            <div className="account-content">
                <div className="accoutn-profileImg">
                    <img src={Profile} height={300} width={300} alt="Person" className="Profileimg" />
                </div>

                <div className="account-info">
                    <p>Your Account Name:</p>
                    <p>{userName}</p>
                </div>
            </div>
        </div>


    )
}

export default ProfileAccount