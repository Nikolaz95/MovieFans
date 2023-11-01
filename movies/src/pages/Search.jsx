



import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';


/* css style */
import './Search.css';

import Mising from '../assets/pictures/mising-pic.jpg';


/* icon */
import { AiOutlineHeart } from "react-icons/ai";


const Search = () => {

    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
    const apiUrl = 'https://api.themoviedb.org/3/search/movie';

    console.log('API URL:', apiUrl);
    console.log('API Key:', apiKey);


    useEffect(() => {
        // Function to make the API request
        console.log('API URL:', apiUrl);
        console.log('API Key:', apiKey);
        const searchMovies = async () => {
            try {
                const response = await fetch(`${apiUrl}?api_key=${apiKey}&query=${searchValue}`);
                if (response.ok) {
                    const data = await response.json();
                    setSearchResults(data.results);

                } else {
                    console.error('Error fetching data from TMDB API:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching data from TMDB API: ', error);
            }
        };

        // Call the searchMovies function whenever searchValue changes
        searchMovies();
    }, [searchValue]);



    return (

        <section className="search-section">

            <h1 className='title-search'>Serch for the movies:</h1>

            <div className="input-search">
                <div className="search-input">
                    <div className="search-conteiner">
                        <form action="search-bar">
                            <input
                                className="searchInput"
                                type="text"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder='Search for the Movies, TVshows and Actors...'
                            />
                        </form>
                    </div>
                </div>
            </div>

            <div className="content-search">
                {searchResults.map((result) => (

                    <div key={result.id} className="searchallmovies-card">
                        <div className="searchallmovies-cardtop">
                            <NavLink to={`/movies/${result.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w300${result.poster_path}`} alt="" className="searchcards-img" />
                            </NavLink>
                        </div>
                        <div className="searchcard-bottom">
                            <p className="searchmovie-name">{result.title}</p>
                            <p className="searchmovie-rating">Rating: {result.vote_average}</p>
                            <span className="searchicon-favorit"> <AiOutlineHeart /></span>
                            <button className="searchadd-watchlist">ADD Wishlist</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Search
