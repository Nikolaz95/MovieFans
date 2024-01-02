import React, { useState } from 'react';
import { NavLink, } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Firebase-Config';
import { useNavigate } from 'react-router-dom';




//react icon import
import { FaArrowRight } from "react-icons/fa";

// css import
import './CreateAccount.css';


export const CreateAccount = () => {

    const navigate = useNavigate();
    const [creatEmail, setCreatEmail] = useState("");
    const [creattPassword, setCreatPassword] = useState("");


    const createAcc = async (e) => {
        e.preventDefault()
        try {
            /* const userCredential = */
            await createUserWithEmailAndPassword(
                auth,
                creatEmail,
                creattPassword
            );
            // Redirect to the profile page after successful account creation
            navigate('/profile');
            /* const user = userCredential.user; */
            /* console.log(user); */

        } catch (error) {
            console.log(error.message)
        }

    };

    return (
        <section className='cr-acc'>

            <h1 className='title-account'>Create Accunt</h1>

            <div className="content-accountcard">
                <div className="account-card">
                    <form className='form-registering' >
                        {/* <label htmlFor="name">Your name :</label>
                        <input
                            type="text"
                            id='name'
                            placeholder='username...'
                        /> <br />
                        <p className="username-sucCr">Your username is valid</p>
                        <p className="username-errorCr">Your username is not valid</p> */}
                        <label htmlFor="mail">Your Emai:</label>
                        <input
                            type="email"
                            id='mail'
                            placeholder='fake@email.com'
                            onChange={(event) => setCreatEmail(event.target.value)}
                        /> <br />
                        <span className="email-sucCr">Your email is valid</span>
                        <span className="email-errorCr">Your email is not valid</span>
                        <label htmlFor="pwd">Password :</label>
                        <input
                            type="password"
                            id='pwd'
                            placeholder='password...'
                            onChange={(event) => setCreatPassword(event.target.value)}
                        />
                        <span className="passw-sucCr">Your password is valid</span>
                        <span className="passw-errorCr">Your password is not valid</span>
                        <div className="btn-login">
                            <button onClick={createAcc} className="create-accBtn">Create your accunt</button>
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
