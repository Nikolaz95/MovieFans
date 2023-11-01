


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



import OverPoster from '../assets/pictures/im.jpg'
import Poster from '../assets/pictures/im-poster.jpg'
import Actor from '../assets/pictures/Tom-Cruise.jpg'
import Poster2 from '../assets/pictures/jh.jpg'

/* import css */
import './Movies.css';


/* icon */
import { AiOutlineHeart } from "react-icons/ai";
import MovieTheater from './MovieTheater';
import MovieUpcoming from './MovieUpcoming';

/* const [selectedType, setSelectedType] = useState('') */


/* const onChange = (e) => {
    setSelectedType(e.target.value)
} */



const Movies = () => {
    return (

        <section className="all-moviecontent">
            <h1>Movies all</h1>

            <div className="all-moviestitle">
                {/* <h1>Now playing in Theatres :</h1> */}


                {/* <select name="" id="" onChange={onChange()}>
                    <option value="teather">In Teather</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="popular">Popular</option>
                </select> */}
            </div>


            <div className="allmovies-content">

                {/* <MovieTheater /> */}
                {/* <MovieUpcoming /> */}

                <div className="allmovies-card">
                    <div className="allmovies-cardtop">
                        <img src={Poster} alt="" className="cards-img" />
                    </div>
                    <div className="card-bottom">
                        <p className="movieall-name">Mission: Impossible</p>
                        <p className="movieall-rating">Rating: 8</p>
                        <span className="icon-favorit"> <AiOutlineHeart /></span>
                        <button className="add-watchlist">ADD Wishlist</button>
                    </div>
                </div>

                <div className="allmovies-card">
                    <div className="allmovies-cardtop">
                        <img src={Poster} alt="" className="cards-img" />
                    </div>
                    <div className="card-bottom">
                        <p className="movieall-name">Mission: Impossible</p>
                        <p className="movieall-rating">Rating: 8</p>
                        <span className="icon-favorit"> <AiOutlineHeart /></span>
                        <button className="add-watchlist">ADD Wishlist</button>
                    </div>
                </div>

                <div className="allmovies-card">
                    <div className="allmovies-cardtop">
                        <img src={Poster} alt="" className="cards-img" />
                    </div>
                    <div className="card-bottom">
                        <p className="movieall-name">Mission: Impossible</p>
                        <p className="movieall-rating">Rating: 8</p>
                        <span className="icon-favorit"> <AiOutlineHeart /></span>
                        <button className="add-watchlist">ADD Wishlist</button>
                    </div>
                </div>

                <div className="allmovies-card">
                    <div className="allmovies-cardtop">
                        <img src={Poster} alt="" className="cards-img" />
                    </div>
                    <div className="card-bottom">
                        <p className="movieall-name">Mission: Impossible</p>
                        <p className="movieall-rating">Rating: 8</p>
                        <span className="icon-favorit"> <AiOutlineHeart /></span>
                        <button className="add-watchlist">ADD Wishlist</button>
                    </div>
                </div>

                <div className="allmovies-card">
                    <div className="allmovies-cardtop">
                        <img src={Poster} alt="" className="cards-img" />
                    </div>
                    <div className="card-bottom">
                        <p className="movieall-name">Mission: Impossible</p>
                        <p className="movieall-rating">Rating: 8</p>
                        <span className="icon-favorit"> <AiOutlineHeart /></span>
                        <button className="add-watchlist">ADD Wishlist</button>
                    </div>
                </div>

                <div className="allmovies-card">
                    <div className="allmovies-cardtop">
                        <img src={Poster} alt="" className="cards-img" />
                    </div>
                    <div className="card-bottom">
                        <p className="movieall-name">Mission: Impossible</p>
                        <p className="movieall-rating">Rating: 8</p>
                        <span className="icon-favorit"> <AiOutlineHeart /></span>
                        <button className="add-watchlist">ADD Wishlist</button>
                    </div>
                </div>



            </div>


            <div className="all-moviestitle">
                {/* <h1>Upcoming movies :</h1> */}

            </div>
            <div className="allmovies-upcomingcontent">


                {/* <div className="allmovies-card">
                    <div className="allmovies-cardtop">
                        <img src={Poster2} alt="" className="cards-img" />
                    </div>
                    <div className="card-bottom">
                        <p className="movieall-name">John Wick: Chapter 4</p>
                        <p className="movieall-rating">Rating: 8</p>
                        <span className="icon-favorit"> <AiOutlineHeart /></span>
                        <button className="add-watchlist">ADD Wishlist</button>
                    </div>
                </div> */}

                {/* <div className="allmovies-card">
                    <div className="allmovies-cardtop">
                        <img src={Poster2} alt="" className="cards-img" />
                    </div>
                    <div className="card-bottom">
                        <p className="movieall-name">John Wick: Chapter 4</p>
                        <p className="movieall-rating">Rating: 8</p>
                        <span className="icon-favorit"> <AiOutlineHeart /></span>
                        <button className="add-watchlist">ADD Wishlist</button>
                    </div>
                </div> */}

                {/* <div className="allmovies-card">
                    <div className="allmovies-cardtop">
                        <img src={Poster2} alt="" className="cards-img" />
                    </div>
                    <div className="card-bottom">
                        <p className="movieall-name">John Wick: Chapter 4</p>
                        <p className="movieall-rating">Rating: 8</p>
                        <span className="icon-favorit"> <AiOutlineHeart /></span>
                        <button className="add-watchlist">ADD Wishlist</button>
                    </div>
                </div> */}

                {/* <div className="allmovies-card">
                    <div className="allmovies-cardtop">
                        <img src={Poster2} alt="" className="cards-img" />
                    </div>
                    <div className="card-bottom">
                        <p className="movieall-name">John Wick: Chapter 4</p>
                        <p className="movieall-rating">Rating: 8</p>
                        <span className="icon-favorit"> <AiOutlineHeart /></span>
                        <button className="add-watchlist">ADD Wishlist</button>
                    </div>
                </div> */}

                {/* <div className="allmovies-card">
                    <div className="allmovies-cardtop">
                        <img src={Poster2} alt="" className="cards-img" />
                    </div>
                    <div className="card-bottom">
                        <p className="movieall-name">John Wick: Chapter 4</p>
                        <p className="movieall-rating">Rating: 8</p>
                        <span className="icon-favorit"> <AiOutlineHeart /></span>
                        <button className="add-watchlist">ADD Wishlist</button>
                    </div>
                </div> */}



            </div>


            <div className="all-moviestitle">
                {/* <h1>Popular movies :</h1> */}

            </div>
            <div className="allmovies-upcomingcontent">



                {/* <div className="allmovies-card">
                    <div className="allmovies-cardtop">
                        <img src={Poster2} alt="" className="cards-img" />
                    </div>
                    <div className="card-bottom">
                        <p className="movieall-name">John Wick: Chapter 4</p>
                        <p className="movieall-rating">Rating: 8</p>
                        <span className="icon-favorit"> <AiOutlineHeart /></span>
                        <button className="add-watchlist">ADD Wishlist</button>
                    </div>
                </div> */}

                {/* <div className="allmovies-card">
                    <div className="allmovies-cardtop">
                        <img src={Poster2} alt="" className="cards-img" />
                    </div>
                    <div className="card-bottom">
                        <p className="movieall-name">John Wick: Chapter 4</p>
                        <p className="movieall-rating">Rating: 8</p>
                        <span className="icon-favorit"> <AiOutlineHeart /></span>
                        <button className="add-watchlist">ADD Wishlist</button>
                    </div>
                </div> */}

                {/* <div className="allmovies-card">
                    <div className="allmovies-cardtop">
                        <img src={Poster2} alt="" className="cards-img" />
                    </div>
                    <div className="card-bottom">
                        <p className="movieall-name">John Wick: Chapter 4</p>
                        <p className="movieall-rating">Rating: 8</p>
                        <span className="icon-favorit"> <AiOutlineHeart /></span>
                        <button className="add-watchlist">ADD Wishlist</button>
                    </div>
                </div> */}

                {/* <div className="allmovies-card">
                    <div className="allmovies-cardtop">
                        <img src={Poster2} alt="" className="cards-img" />
                    </div>
                    <div className="card-bottom">
                        <p className="movieall-name">John Wick: Chapter 4</p>
                        <p className="movieall-rating">Rating: 8</p>
                        <span className="icon-favorit"> <AiOutlineHeart /></span>
                        <button className="add-watchlist">ADD Wishlist</button>
                    </div>
                </div> */}

                {/* <div className="allmovies-card">
                    <div className="allmovies-cardtop">
                        <img src={Poster2} alt="" className="cards-img" />
                    </div>
                    <div className="card-bottom">
                        <p className="movieall-name">John Wick: Chapter 4</p>
                        <p className="movieall-rating">Rating: 8</p>
                        <span className="icon-favorit"> <AiOutlineHeart /></span>
                        <button className="add-watchlist">ADD Wishlist</button>
                    </div>
                </div> */}

                {/* <div className="allmovies-card">
                    <div className="allmovies-cardtop">
                        <img src={Poster2} alt="" className="cards-img" />
                    </div>
                    <div className="card-bottom">
                        <p className="movieall-name">John Wick: Chapter 4</p>
                        <p className="movieall-rating">Rating: 8</p>
                        <span className="icon-favorit"> <AiOutlineHeart /></span>
                        <button className="add-watchlist">ADD Wishlist</button>
                    </div>
                </div> */}

            </div>

        </section>

    )
}

export default Movies
