


import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Root from './components/Root.jsx';
import Content from './components/pages/Content.jsx';
import Movies from './components/pages/Movies.jsx';
import TvShows from './components/pages/TvShows.jsx';
import MoviesDetails from './components/pages/MoviesDetails.jsx';
import Search from './components/pages/Search.jsx';
import Registering from './components/auth/Registering.jsx';
import CreacteAccoutn from './components/auth/CreateAccount.jsx';
import ProfileAccount from './components/pages/Profile/ProfileAccount.jsx';
import WatchList from './components/pages/Profile/WatchList.jsx';
import FavoritList from './components/pages/Profile/FavoritList.jsx';
import Update from './components/pages/Profile/Update.jsx';
import FavActors from './components/pages/Profile/FavActors.jsx';
import ActorsPage from './components/pages/ActorsPage.jsx';




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
        path: "/tvshows",
        element: <TvShows />
      },
      ,

      {
        path: "/actors/:id",
        element: <ActorsPage />
      },

      {
        path: "/logIn",
        element: <Registering />
      },

      {
        path: "/createAccoutn",
        element: <CreacteAccoutn />
      },

      {
        path: "/profile",
        element: <ProfileAccount />
      },

      {
        path: "/watchList",
        element: <WatchList />
      },

      {
        path: "/favoritMovieTvShowList",
        element: <FavoritList />
      },
      {
        path: "/favoritActor",
        element: <FavActors />
      },

      {
        path: "/update",
        element: <Update />
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
