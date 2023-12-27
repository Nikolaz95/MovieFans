import React from 'react'
import { NavLink } from 'react-router-dom';


/* css style */
import '../Profile/Update.css';
import NavLinProfileAccount from './NavLinProfileAccount';
import Profile from '../../../assets/pictures/avatar-profile.jpg';
import { MdAddAPhoto } from "react-icons/md";




const Update = () => {
    return (
        <div className="content-update">
            <h1>Update Your Profile</h1>
            <NavLinProfileAccount />

            <div className="profileUpdate-kontainer">
                <div className="profileUpdate-img">
                    <img src={Profile} height={350} width={350} alt="" />
                    <MdAddAPhoto />
                </div>

                <form action="" className='form-updateProfile'>
                    <label>Your Account Name: <br />
                        <input type="text" placeholder='account name...' />
                    </label>

                    <label>Old Password: <br />
                        <input type="password" placeholder='old password...' />
                    </label>

                    <label>New Password: <br />
                        <input type="password" placeholder='new password...' />
                    </label>

                    <label>Confirm Password: <br />
                        <input type="password" placeholder='confirm password...' />
                    </label>

                </form>

                <div className="buttons-update">
                    <button>Save update</button>
                    <button>Delete account</button>
                </div>
            </div>
        </div>
    )
}

export default Update