

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


    /*   function Arrow(props) {
          const { className, style, onClick } = props;
          return (
              <div
                  className={className}
                  style={{ ...style, display: "block", background: "black" }}
                  onClick={onClick}
              />
          );
      }
  
  
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
                      initialSlide: 2
                  }
              },
              {
                  breakpoint: 320,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 1,
                  }
              }
          ]
      }; */


    return (
        <div className='content-body'>
            <h1>Content</h1>


            <div className="smal-title">
                <h1>Now playing in Theatres :</h1>
                <NavLink to="/movies">
                    <span className='navlink'>View All :</span>
                </NavLink>

            </div>
            <MovieTheater />


            <div className="smal-title">
                <h1>Upcoming movies :</h1>
                <NavLink to="/movies">
                    <span className='navlink'>View All :</span>
                </NavLink>
            </div>
            <MovieUpcoming />

            <div className="smal-title">
                <h1>Top Rated Movies :</h1>
                <NavLink to="/movies">
                    <span className='navlink'>View All :</span>
                </NavLink>
            </div>
            <MovieTopRated />

        </div>
    )
}

export default Content
