import React, { useEffect, useState } from 'react'
import NavLinProfileAccount from './NavLinProfileAccount';
import { useLocation } from 'react-router-dom';
import { auth } from '../../config/Firebase-Config';


/* css style */
import '../Profile/ProfileAccount.css';

import Profile from '../../../assets/pictures/avatar-profile.jpg';

const ProfileAccount = () => {
    const location = useLocation();
    const { userName } = location.state || {};
    const [userDisplayName, setUserDisplayName] = useState(null);


    useEffect(() => {
        const fetchUserDisplayName = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                    await user.reload(); // Reload user data to get the updated display name
                    setUserDisplayName(user.displayName);
                }
            } catch (error) {
                console.error('Error fetching user display name:', error.message);
            }
        };

        fetchUserDisplayName();
    }, [userName]);

    console.log(userName)
    console.log(userDisplayName)

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
                    <p>{userDisplayName !== null ? userDisplayName : ''}</p>
                </div>
            </div>
        </div>


    )
}

export default ProfileAccount