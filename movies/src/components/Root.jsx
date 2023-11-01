

import React from 'react'
import Headers from './Headers';
import Footer from './Footer';

import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Headers />
            <Outlet />
            <Footer />

        </div>
    )
}

export default Root
