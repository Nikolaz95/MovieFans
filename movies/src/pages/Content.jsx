

import React from 'react'
import { NavLink, Link } from 'react-router-dom';

import styled from "styled-components"
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import MovieTheater from './MovieTheater';
import MovieUpcoming from './MovieUpcoming';
import MovieTopRated from './MovieTopRated';


const Content = () => {


    return (
        <div className='content-body'>
            <h1>Content</h1>


            <div className="smal-title">
                <h1>Now playing in Theatres :</h1>
                <NavLink to="/movies?category=theaters">
                    <span className='navlink'>View All :</span>
                </NavLink>

            </div>
            <MovieTheater />


            <div className="smal-title">
                <h1>Upcoming movies :</h1>
                <NavLink to="/movies?category=upcoming">
                    <span className='navlink'>View All :</span>
                </NavLink>
            </div>
            <MovieUpcoming />

            <div className="smal-title">
                <h1>Top Rated Movies :</h1>
                <NavLink to="/movies?category=toprated">
                    <span className='navlink'>View All :</span>
                </NavLink>
            </div>
            <MovieTopRated />

        </div>
    )
}

export default Content
