import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



import { AiOutlineHeart } from "react-icons/ai";



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Actorimg from '../../assets/pictures/Tom-Cruise.jpg';
import Film from '../../assets/pictures/im-poster.jpg';
import MissingPicture from '../../assets/pictures/mising-pic.jpg';



/* import css */
import '../pages/ActorsPage.css';

const ActorsPage = () => {
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
    const ActorsInfoPageSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
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
                    initialSlide: 0,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                }
            }
        ]
    };

    /* fetch data */

    const [personData, setPersonData] = useState(null);
    const [movieCredits, setMovieCredits] = useState([]);
    const { id } = useParams();


    const fetchPersonData = async (personId) => {
        const apiKey = 'd0e15d3cd703e39934833d9dc348e907'
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/person/${personId}?api_key=${apiKey}&language=en-US`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch person data');
            }

            const data = await response.json();
            setPersonData(data);
            // Fetch movie credits after fetching person data
            fetchMovieCredits(personId);
        } catch (error) {
            console.error('Error fetching person data:', error);
        }
    };




    /* fetch data movie credits */

    const fetchMovieCredits = async (personId) => {
        const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${apiKey}&language=en-US`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch movie credits');
            }

            const data = await response.json();
            setMovieCredits(data.cast);
        } catch (error) {
            console.error('Error fetching movie credits:', error);
        }
    };

    useEffect(() => {
        // Replace '123' with the actual person_id you want to fetch
        fetchPersonData(id);
    }, [id]);




    return (
        <div>

            <section className="actorsPAge-content">

                <aside className='Actors-left'>
                    {personData?.profile_path ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${personData.profile_path}`}
                            alt=""
                            className='Actors-img'
                        />
                    ) : (
                        <img src={MissingPicture} alt="Missing" className="Actors-img" />
                    )}
                    <div className="details-Actors">

                        <div className="details-addbutons">
                            <AiOutlineHeart />
                        </div>
                        <h1>Personal Info :</h1>

                        <h1>Know for:</h1>
                        <p>{personData?.known_for_department}</p>

                        <h1>Birthday:</h1>
                        <p>{personData?.birthday}</p>

                        <h1>Place of Birth:</h1>
                        <p>{personData?.place_of_birth}</p>
                    </div>
                </aside>


                <div className="Actors-biography">
                    <h1 className="Actors-name">{personData?.name}</h1>


                    <h1 className="Actors-bio">Biograph</h1>
                    <p>{personData?.biography}</p>

                </div>

            </section>





            <article className="Actors-rightBottom">

                <h1 className="title-Actors">Movies of Actor:</h1>
                <Slider {...ActorsInfoPageSlider}>
                    {movieCredits.map((movie) => (
                        <div key={movie.id} className='Actorsmovies-card'>
                            <div className="Actorsmovies-top">
                                <NavLink to={`/movies/${movie.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="Actorsmovies-img" />
                                </NavLink>
                            </div>
                            <div className="Actorsmovies-bottom">
                                <p className="Actorsmovies-name">{movie.title}</p>
                                <p className="Actorsmovies-rating">{movie.vote_average}</p>
                                <span className="ActorsmoviesIcon-favorit"> <AiOutlineHeart /></span>
                                <span className="ActorsmoviesAdd-watchlist">Add Widshilt</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </article>
        </div>
    );
};

export default ActorsPage