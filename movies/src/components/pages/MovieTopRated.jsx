



import { NavLink, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* css style */
import './MovieTopRated.css';

/* styling components */
import styled from "styled-components"

/* icon */
import { AiOutlineHeart } from "react-icons/ai";

const MovieTopRated = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [

            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    /* initialSlide: 0, */
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    /* initialSlide: 0, */
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    /* initialSlide: 0, */
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    /* initialSlide: 0, */
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    /* initialSlide: 0, */
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    /* initialSlide: 0, */
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    /* initialSlide: 0, */
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    /* initialSlide: 0, */
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    const [topRated, setTopRated] = useState([]);
    const [error, setError] = useState(null);


    async function fetchTopRated() {
        try {
            const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated';
            const url = new URL(apiUrl);
            url.searchParams.append('api_key', 'd0e15d3cd703e39934833d9dc348e907');
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTopRated(data.results);
        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchTopRated();
    }, []);



    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black" }}
                onClick={onClick}
            />
        );
    }


    return (
        <div className="card-container">

            <Slider {...settings}>
                {topRated.map((topRateds) => (
                    <div key={topRateds.id} className='card'>
                        <div className="cards-content">
                            <div className="card-top">
                                <NavLink to={`/movies/${topRateds.id}`}>
                                    <img className="cards-img" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${topRateds.poster_path}`} alt="" />
                                </NavLink>
                            </div>

                            <div className="card-bottom">
                                <p className="movie-name">{topRateds.title}</p>
                                <p className="movie-rating">Rating: {topRateds.vote_average}</p>
                                <span className="icon-favorit"> <AiOutlineHeart /></span>
                                <button className="add-watchlist">Add Watchlist</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}



export default MovieTopRated
