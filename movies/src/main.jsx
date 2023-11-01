


import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Movies from './pages/Movies.jsx';
import Root from './components/Root.jsx';
import TvShows from './pages/TvShows.jsx';
import Registering from './pages/Registering.jsx';
import Content from './pages/Content.jsx';
import MoviesDetails from './pages/MoviesDetails.jsx';
import Search from './pages/Search.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Content />
      },

      {
        path: "/movies",
        element: <Movies />
      },

      {
        path: "/movies/:id",
        element: <MoviesDetails />
      },

      {
        path: "/search",
        element: <Search />
      },



      {
        path: "/tvShows",
        element: <TvShows />
      },

      {
        path: "/logIn",
        element: <Registering />
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
