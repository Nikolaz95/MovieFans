import React from 'react'
import { NavLink } from 'react-router-dom';

/* css style */
import '../Profile/WatchList.css';
import NavLinProfileAccount from './NavLinProfileAccount';

/* icon */
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineArrowUp, AiOutlineSearch } from 'react-icons/ai';
import Poster from '../../../assets/pictures/im-poster.jpg';

const WatchList = () => {
    return (
        <div className="content-WatchList">
            <h1>Your Watch List</h1>
            <NavLinProfileAccount />


            <div className="watchList-content">

                <div className="watchList-card">
                    <div className="allmovies-cardtop">
                        <NavLink to="">
                            <img src={Poster} alt="" className="watchList-img" />
                        </NavLink>
                    </div>
                    <div className="watchListcard-bottom">
                        <p className="watchList-name">sdasad</p>
                        <p className="watchList-rating">Rating: 2134</p>
                        <span className="watchListicon-favorit">
                            <AiOutlineHeart />
                        </span>
                        <div className="btn-addrmv">
                            <button className="watchListadd-btnadd">ADD Wishlist</button>
                            <button className="watchListadd-btnrmv">Remove</button>
                        </div>
                    </div>
                </div>
                <div className="watchList-card">
                    <div className="allmovies-cardtop">
                        <NavLink to="">
                            <img src={Poster} alt="" className="watchList-img" />
                        </NavLink>
                    </div>
                    <div className="watchListcard-bottom">
                        <p className="watchList-name">sdasad</p>
                        <p className="watchList-rating">Rating: 2134</p>
                        <span className="watchListicon-favorit">
                            <AiOutlineHeart />
                        </span>
                        <div className="btn-addrmv">
                            <button className="watchListadd-btnadd">ADD Wishlist</button>
                            <button className="watchListadd-btnrmv">Remove</button>
                        </div>
                    </div>
                </div>
                <div className="watchList-card">
                    <div className="allmovies-cardtop">
                        <NavLink to="">
                            <img src={Poster} alt="" className="watchList-img" />
                        </NavLink>
                    </div>
                    <div className="watchListcard-bottom">
                        <p className="watchList-name">sdasad</p>
                        <p className="watchList-rating">Rating: 2134</p>
                        <span className="watchListicon-favorit">
                            <AiOutlineHeart />
                        </span>
                        <div className="btn-addrmv">
                            <button className="watchListadd-btnadd">ADD Wishlist</button>
                            <button className="watchListadd-btnrmv">Remove</button>
                        </div>
                    </div>
                </div>
                <div className="watchList-card">
                    <div className="allmovies-cardtop">
                        <NavLink to="">
                            <img src={Poster} alt="" className="watchList-img" />
                        </NavLink>
                    </div>
                    <div className="watchListcard-bottom">
                        <p className="watchList-name">sdasad</p>
                        <p className="watchList-rating">Rating: 2134</p>
                        <span className="watchListicon-favorit">
                            <AiOutlineHeart />
                        </span>
                        <div className="btn-addrmv">
                            <button className="watchListadd-btnadd">ADD Wishlist</button>
                            <button className="watchListadd-btnrmv">Remove</button>
                        </div>
                    </div>
                </div>
                <div className="watchList-card">
                    <div className="allmovies-cardtop">
                        <NavLink to="">
                            <img src={Poster} alt="" className="watchList-img" />
                        </NavLink>
                    </div>
                    <div className="watchListcard-bottom">
                        <p className="watchList-name">sdasad</p>
                        <p className="watchList-rating">Rating: 2134</p>
                        <span className="watchListicon-favorit">
                            <AiOutlineHeart />
                        </span>
                        <div className="btn-addrmv">
                            <button className="watchListadd-btnadd">ADD Wishlist</button>
                            <button className="watchListadd-btnrmv">Remove</button>
                        </div>
                    </div>
                </div>
                <div className="watchList-card">
                    <div className="allmovies-cardtop">
                        <NavLink to="">
                            <img src={Poster} alt="" className="watchList-img" />
                        </NavLink>
                    </div>
                    <div className="watchListcard-bottom">
                        <p className="watchList-name">sdasad</p>
                        <p className="watchList-rating">Rating: 2134</p>
                        <span className="watchListicon-favorit">
                            <AiOutlineHeart />
                        </span>
                        <div className="btn-addrmv">
                            <button className="watchListadd-btnadd">ADD Wishlist</button>
                            <button className="watchListadd-btnrmv">Remove</button>
                        </div>
                    </div>
                </div>
                <div className="watchList-card">
                    <div className="allmovies-cardtop">
                        <NavLink to="">
                            <img src={Poster} alt="" className="watchList-img" />
                        </NavLink>
                    </div>
                    <div className="watchListcard-bottom">
                        <p className="watchList-name">sdasad</p>
                        <p className="watchList-rating">Rating: 2134</p>
                        <span className="watchListicon-favorit">
                            <AiOutlineHeart />
                        </span>
                        <div className="btn-addrmv">
                            <button className="watchListadd-btnadd">ADD Wishlist</button>
                            <button className="watchListadd-btnrmv">Remove</button>
                        </div>
                    </div>
                </div>
                <div className="watchList-card">
                    <div className="allmovies-cardtop">
                        <NavLink to="">
                            <img src={Poster} alt="" className="watchList-img" />
                        </NavLink>
                    </div>
                    <div className="watchListcard-bottom">
                        <p className="watchList-name">sdasad</p>
                        <p className="watchList-rating">Rating: 2134</p>
                        <span className="watchListicon-favorit">
                            <AiOutlineHeart />
                        </span>
                        <div className="btn-addrmv">
                            <button className="watchListadd-btnadd">ADD Wishlist</button>
                            <button className="watchListadd-btnrmv">Remove</button>
                        </div>
                    </div>
                </div>
                <div className="watchList-card">
                    <div className="allmovies-cardtop">
                        <NavLink to="">
                            <img src={Poster} alt="" className="watchList-img" />
                        </NavLink>
                    </div>
                    <div className="watchListcard-bottom">
                        <p className="watchList-name">sdasad</p>
                        <p className="watchList-rating">Rating: 2134</p>
                        <span className="watchListicon-favorit">
                            <AiOutlineHeart />
                        </span>
                        <div className="btn-addrmv">
                            <button className="watchListadd-btnadd">ADD Wishlist</button>
                            <button className="watchListadd-btnrmv">Remove</button>
                        </div>
                    </div>
                </div>
                <div className="watchList-card">
                    <div className="allmovies-cardtop">
                        <NavLink to="">
                            <img src={Poster} alt="" className="watchList-img" />
                        </NavLink>
                    </div>
                    <div className="watchListcard-bottom">
                        <p className="watchList-name">sdasad</p>
                        <p className="watchList-rating">Rating: 2134</p>
                        <span className="watchListicon-favorit">
                            <AiOutlineHeart />
                        </span>
                        <div className="btn-addrmv">
                            <button className="watchListadd-btnadd">ADD Wishlist</button>
                            <button className="watchListadd-btnrmv">Remove</button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default WatchList