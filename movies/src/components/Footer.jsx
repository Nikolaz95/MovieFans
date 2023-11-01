

import React from 'react'
import styled from "styled-components"

import { AiOutlineCopyright } from "react-icons/ai";


const Footer = () => {
    return (
        <FooterStyle>
            Nikola Zovko copyright  <AiOutlineCopyright />
        </FooterStyle >
    )
}


/* footer styling */

const FooterStyle = styled.footer`
    text-align: center;
    padding: 20px;
    height: 70px;
    font-size: 20px;
    background-color: rgb(2, 129, 255);
    `;

export default Footer
