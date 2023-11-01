



import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';



import OverPoster from '../assets/pictures/im.jpg'
import Poster from '../assets/pictures/im-poster.jpg'
import Actor from '../assets/pictures/Tom-Cruise.jpg'
import Mising from '../assets/pictures/mising-pic.jpg';



/* icon */
import { AiOutlineHeart } from "react-icons/ai";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


/* css style */
import './MoviesDetails.css';


const MoviesDetails = () => {




    /* funckija za arrow u slideru */
    /* function Arrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black" }}
                onClick={onClick}
            />
        );
    } */


    /* funckija za slider */
    /*  
    const actorsSlider = {
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow: 4,
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
  */


    const params = useParams();
    const [data, setData] = useState(null);


    useEffect(() => {
        async function fetchMovieDetails() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json()
            setData(json);
            console.log(json)
        }
        fetchMovieDetails();
    }, [params.id])




    return (

        <div className='moviedetails-content'>

            <div className="over-poster">
                <div className="img-overposter bg-gradient-to-t from-black">
                    <img className="object-cover size-img movie__backdrop" src={data?.backdrop_path ? `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.poster_path}` : Mising} alt="sadasd" />
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




            {/* <section className='actors-section'> */}
            {/* <h1 className="title-actors">Actors:</h1> */}

            {/* <div className="actors-content"> */}


            {/* <Slider {...actorsSlider}>  */}

            {/* <div className="actors-card">
                        <img src={Actor} alt="" className="actor-image" />
                        <div className="actors-info">
                            <p className="actors-name">Tom Cruise</p>
                            <p className="character">Ethan Hunt</p>
                        </div>
                    </div> */}



            {/* </Slider> */}


            {/* </div> */}

            {/* </section> */}

            {/* <section className="reviews-section">
                <h1 className='title-previews'>REVIEWS :</h1>

                <div className="reviews-content">
                    <div className="content-inner">
                        <div className="avatar-icon">
                            <img src={Actor} height={50} width={50} alt="" />
                        </div>
                        <div className="content-right">
                            <div className="review-topright">
                                <h5 className="user-name">username</h5>
                                <p className='"review-date'>01//1/2001 20:00:44</p>
                            </div>
                            <p className='"review-comment'>comentar</p>

                        </div>


                    </div>
                </div>
            </section> */}




        </div>
    )
}

export default MoviesDetails
