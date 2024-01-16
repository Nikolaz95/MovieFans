


import { NavLink, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* css style */
import './MovieTheater.css';




/* icon */
import { AiOutlineHeart } from "react-icons/ai";

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

const MovieUpcoming = () => {


    const settings = {
        dots: false,
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
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const [tvShow, settvShow] = useState([]);
    const [error, setError] = useState(null);

    async function fetchTvShow() {


        try {
            const apiUrl = 'https://api.themoviedb.org/3/movie/upcoming';
            const url = new URL(apiUrl);
            url.searchParams.append('api_key', 'd0e15d3cd703e39934833d9dc348e907');
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            settvShow(data.results);
        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchTvShow();
    }, []);




    return (


        <Slider {...settings}>
            {tvShow.map((tvShows) => (
                <div key={tvShows.id} className='card'>
                    <div className="cards-content">
                        <div className="card-top">

                            <NavLink to={`/movies/${tvShows.id}`}>
                                <img className="cards-img" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${tvShows.poster_path}`} alt="" />
                            </NavLink>
                        </div>

                        <div className="card-bottom">
                            <p className="movie-name">{tvShows.title}</p>
                            <p className="movie-rating">Rating: {tvShows.vote_average}</p>
                            <span className="icon-favorit"> <AiOutlineHeart /></span>
                            <button className="add-watchlist">Add Watchlist</button>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};


export default MovieUpcoming
