import React, { useState } from 'react'
import { getAuth, updateProfile, updatePassword, deleteUser } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import NavLinProfileAccount from './NavLinProfileAccount';



/* css style */
import '../Profile/Update.css';
import Profile from '../../../assets/pictures/avatar-profile.jpg';

// icon react js
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
                        <input type="text"
                            placeholder='account name...' />
                    </label>

                    <label>New Password: <br />
                        <input type="password"
                            placeholder='new password...' />
                    </label>
                    <label>Old Password: <br />
                        <input type="password"
                            placeholder='old password...' />
                    </label>


                    <label>Confirm New Password: <br />
                        <input type="password"
                            placeholder='confirm new password...' />
                    </label>

                </form>

                <div className="buttons-update">
                    <button className="buttons-save" >Save update</button>
                    <button className="buttons-delete" >Delete account</button>
                    <button className="buttons-lgout" >Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default Update