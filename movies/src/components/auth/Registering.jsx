


import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


// css import

import './Registering.css';



const Registering = () => {
    return (

        <section className="registering-section">

            <h1 className='title-registering'>Sign in</h1>
            <div className="card-registering">

                <div className="lef-registering">
                    <form className='form-registering'>
                        {/* <label htmlFor="name">Your username:</label>
                        <input
                            type="text"
                            id='name'
                            placeholder='username...' />
                        <p className="username-suc">Your username is valid</p>
                        <p className="username-error">Your username is not valid</p><br /> */}
                        <label htmlFor="mail">Your Emai:</label>
                        <input
                            type="email"
                            id='mail'
                            placeholder='email...'
                            onChange={(e) => setEmail(e.target.value)} />
                        <p className="email-suc">Your email is valid</p>
                        <p className="email-error">Your email is not valid</p><br />


                        <label htmlFor="pwd">Password :</label>
                        <input
                            type="password"
                            id='pwd'
                            placeholder='password...'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p className="passw-suc">Your password is valid</p>
                        <p className="passw-error">Your password is not valid</p>
                        <div className="btn-login">
                            <button className="login">Log in</button>
                        </div>
                    </form>


                    <div className="divider-text">
                        <span>Or:</span>
                    </div>


                    <NavLink to="/createAccoutn">
                        <div className="btn-registering">
                            <button className="create-acc">Create a New Accoutn</button>
                        </div>
                    </NavLink>

                </div>

                <div className="right-registering">
                    <h1 className="registering-title">Benefits of your free  account</h1>
                    <p>Personalized Recommendations</p>

                    <h1 className="registering-title">Your Watchlist</h1>
                    <p>Track everything you want to watch and receive e-mail when movies open in theaters.</p>

                    <h1 className="registering-title">Your Favorit list</h1>
                    <p>Track everything you want to watch and receive e-mail when movies open in theaters.</p>


                </div>
            </div>


        </section>
    )
}

export default Registering
