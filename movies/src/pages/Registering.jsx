


import React from 'react'
import { NavLink, Link } from 'react-router-dom';


import './Registering.css';



const Registering = () => {
    return (

        <section className="registering-section">

            <h1 className='title-registering'>Sign in</h1>
            <div className="card-registering">

                <div className="lef-registering">
                    <form action="" className='form-registering'>
                        <label htmlFor="name">User name :</label>
                        <input type="text" id='name' placeholder='username...' /> <br />

                        <label htmlFor="pwd">password :</label>
                        <input type="password" id='pwd' placeholder='password...' />
                        <div className="btn-login">
                            <button className="login">Log in</button>
                        </div>
                    </form>


                    <div className="divider-text">
                        <span>Or:</span>
                    </div>


                    <NavLink to="/accoutn">
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
