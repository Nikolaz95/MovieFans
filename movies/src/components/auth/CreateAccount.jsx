import React from 'react'
import { NavLink } from 'react-router-dom';


import { FaArrowRight } from "react-icons/fa";

import './CreateAccount.css';


const CreateAccount = () => {
    return (
        <section className='cr-acc'>

            <h1 className='title-account'>Create Accunt</h1>

            <div className="content-accountcard">
                <div className="account-card">
                    <form action="" className='form-registering'>
                        <label htmlFor="name">Your name :</label>
                        <input type="text" id='name' placeholder='username...' /> <br />

                        <label htmlFor="pwd">password :</label>
                        <input type="password" id='pwd' placeholder='password...' />
                        <div className="btn-login">
                            <button className="login">Create your accunt</button>
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
