


import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';

/* import css */
import '../pages/Movies.css';

/* icon */
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineArrowUp, AiOutlineSearch } from 'react-icons/ai';



const Movies = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);



    const [selectedCategory, setSelectedCategory] = useState(queryParams.get('category') || 'theaters');

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value)
        setShowDropdown(false);
    };

    /* funckija za dropdown */
    const [showDropdown, setShowDropdown] = useState(false);


    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getDataRequest = async () => {
            try {
                let link = '';

                if (selectedCategory === 'theaters') {
                    link = `https://api.themoviedb.org/3/movie/now_playing?api_key=d0e15d3cd703e39934833d9dc348e907`;
                } else if (selectedCategory === 'upcoming') {
                    link = `https://api.themoviedb.org/3/movie/upcoming?api_key=d0e15d3cd703e39934833d9dc348e907`;
                } else if (selectedCategory === 'toprated') {
                    link = `https://api.themoviedb.org/3/movie/top_rated?api_key=d0e15d3cd703e39934833d9dc348e907`;
                }

                const response = await fetch(link);
                const jsonData = await response.json();

                setMovies(jsonData.results || []);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle the error, e.g., show a user-friendly message
            }
        };

        getDataRequest();
    }, [selectedCategory]);




    return (


        <section className="all-moviecontent">

            <div className="category-title">
                <h1>{selectedCategory === 'theaters' ? 'Now playing in Theatres' : selectedCategory === 'upcoming' ? 'Upcoming movies' : selectedCategory === "toprated" ? 'Top Rated Movies' : ""}</h1>


                <div className="dropdown-content">
                    <section className="dropdown-menu">
                        <p onClick={() => setShowDropdown(!showDropdown)}>Filter By Movie Option <AiOutlineArrowUp className={showDropdown ? 'arrowDrp rotatedArrow' : 'arrowDrp'} />
                        </p>
                    </section>
                    {showDropdown && (
                        <div onClick={handleCategoryChange} className={`showDrop ${showDropdown ? 'active' : ''}`}>
                            <option value="theaters">Theatres movies</option>
                            <option value="upcoming">Upcoming movies</option>
                            <option value="toprated">Top Rated Movies</option>

                        </div >
                    )}
                </div>
            </div>


            <div className="allmovies-content ">
                {movies.map((movie) => (
                    <div key={movie.id} className={`allmovies-card ${selectedCategory}`}>
                        <div className="allmovies-cardtop">
                            <NavLink to={`/movies/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="allmoviescards-img" />
                            </NavLink>
                        </div>
                        <div className="card-bottom">
                            <p className="movieall-name">{movie.title}</p>
                            <p className="movieall-rating">Rating: {movie.vote_average}</p>
                            <span className="icon-favorit">
                                <AiOutlineHeart />
                            </span>
                            <button className="add-watchlist">ADD Wishlist</button>
                        </div>
                    </div>
                ))}
            </div>


        </section>

    )
}

export default Movies
