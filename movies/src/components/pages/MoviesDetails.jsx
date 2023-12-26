



import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';

import Mising from '../../assets/pictures/mising-pic.jpg';



/* icon */
import { AiOutlineHeart } from "react-icons/ai";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


/* css style */
import './MoviesDetails.css';


const MoviesDetails = () => {




    /* funckija za arrow u slideru */




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




    /* funckija za ActorsSlider */


    const ActorsSlider = {
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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };





    /* funckija za slider */



    const RecomendetionsSlider = {
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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };




    const params = useParams();
    const [data, setData] = useState(null);

    /* fetch  recommendations*/
    const [recommendations, setRecommendations] = useState([]);


    /* fetch  credits actors */
    const [credits, setCredits] = useState(null);



    useEffect(() => {
        async function fetchMovieDetails() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json()
            setData(json);
            console.log(json)
        }

        async function fetchMovieRecomendations() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=d0e15d3cd703e39934833d9dc348e907`);

            const json = await response.json();
            setRecommendations(json.results);
        }


        async function fetchMovieCredits() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json();
            setCredits(json);
        }



        fetchMovieDetails();
        fetchMovieRecomendations();
        fetchMovieCredits();
    }, [params.id])




    return (

        <div className='moviedetails-content'>

            <div className="over-poster">
                <div className="img-overposter bg-gradient-to-t from-black">
                    <img className="object-cover size-img movie__backdrop" src={data?.backdrop_path ? `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.poster_path}` : Mising} alt="sadasd"
                    />
                </div>
            </div>

            <div className="moviedetails">

                <div className="moviedetails-left">
                    <div className="poster-box">
                        <img src={data?.backdrop_path ? `https://www.themoviedb.org/t/p/w300_and_h450_multi_faces/${data.poster_path}` : Mising} alt="" className='movie-poster' />
                    </div>
                </div>

                <div className="moviedetails-right">
                    <div className="detailsright-top">
                        <div className="moviename">
                            <h1>{data?.original_title}</h1>
                        </div>
                        <div className="facts">
                            <span className='status'>Status: {data?.status}</span>
                            <span className='release'>Release: {data?.release_date}</span>
                            <span className='runtime'>Runtime: {data?.runtime}  min</span>
                            <p className='rating'>Rating: {data?.vote_average}</p>

                        </div>

                        <div className='movie-genres'>

                            {/* <span className="movie-genre">Action</span>
                            <span className="movie-genre">Action</span>
                            <span className="movie-genre">Action</span> */}

                            {
                                data?.genres.map((genre) => (
                                    <span className='movie-genre' key={genre.id}>
                                        {genre.name}
                                    </span>
                                ))}
                        </div>

                        <div className="lista">
                            <span className='favorite'>Add to Favorite</span>
                            <span className='watchlist'>Add to Watch list </span>
                        </div>


                        <div className="detailsright-bottom">
                            <div className="tagline">
                                <h3>{data?.tagline}</h3>
                            </div>

                            <h3>Overview:</h3>

                            <div className="overview">
                                <p>{data?.overview}</p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>


            <section className='actors'>
                <h1 className='title-actors'>Actors:</h1>

                <div className="actors-content">

                    <Slider {...ActorsSlider}>
                        {credits?.cast?.map(actor => (
                            <div key={actor.id} class="actors-card">
                                <img src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`} alt="Person" class="actors-img" />

                                <div class="actors-botton-container">
                                    <p class="actors-name">{actor.name}</p>
                                    <p class="actors-character">{actor.character}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>



            <section className="recommendations">
                <h1 className="title-recommendations">Similar:</h1>


                <div className="recommendations-content">


                    {recommendations && recommendations.length > 0 && (
                        <Slider {...RecomendetionsSlider}>
                            {recommendations.map((rekom) => (
                                <div key={rekom.id} className="recommendations-card">
                                    <div className="recommendations-top">
                                        <NavLink to={`/movies/${rekom.id}`}>
                                            <img src={rekom?.backdrop_path ? `https://www.themoviedb.org/t/p/w300_and_h450_multi_faces/${rekom.poster_path}` : Mising} className="recommendationscards-img" alt="" />
                                        </NavLink>
                                    </div>

                                    <div className="recommendations-bottom">
                                        <p className="recommendations-movie-name">{rekom.title}</p>
                                        <p className="movie-rating">Rating: {rekom.vote_average}</p>
                                        <span className="recommendations-icon-favorit"> <AiOutlineHeart /></span>
                                        <button className="recommendations-add-watchlist">Add Watchlist</button>
                                    </div>
                                </div>
                            ))}
                        </Slider>

                    )}
                </div>
            </section>
        </div>
    )
}

export default MoviesDetails
