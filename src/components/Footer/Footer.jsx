//Footer

import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_content'>
                <p>© 2022-2023 - ISS Tracking | Hébergé via <a className='footer_link' href="https://vercel.com/home" target="_blank" rel="noreferrer">VERCEL</a></p>
                <p>@Zlimteck</p>
            </div>
        </footer>
    );
}

export default Footer;