import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config/firebaseConfig';



//react icon import
import { FaArrowRight } from "react-icons/fa";

// css import
import './CreateAccount.css';


const CreateAccount = () => {
    return (
        <section className='cr-acc'>

            <h1 className='title-account'>Create Accunt</h1>

            <div className="content-accountcard">
                <div className="account-card">
                    <form className='form-registering'>
                        <label htmlFor="name">Your name :</label>
                        <input
                            type="text"
                            id='name'
                            placeholder='username...'
                        /> <br />
                        <p className="username-sucCr">Your username is valid</p>
                        <p className="username-errorCr">Your username is not valid</p>
                        <label htmlFor="mail">Your Emai:</label>
                        <input
                            type="email"
                            id='mail'
                            placeholder='email...' /> <br />
                        <p className="email-sucCr">Your email is valid</p>
                        <p className="email-errorCr">Your email is not valid</p>
                        <label htmlFor="pwd">Password :</label>
                        <input
                            type="password"
                            id='pwd'
                            placeholder='password...'
                        />
                        <p className="passw-sucCr">Your password is valid</p>
                        <p className="passw-errorCr">Your password is not valid</p>
                        <div className="btn-login">
                            <button type="submit" className="create-accBtn">Create your accunt</button>
                        </div>
                    </form>
                </div>
                <p>You already have account ?</p>

                <NavLink to="/logIn" className="singIn">
                    <p>Sing In <FaArrowRight className='arow-singin' /></p>
                </NavLink>
            </div>
        </section>
    )
}

export default CreateAccount
