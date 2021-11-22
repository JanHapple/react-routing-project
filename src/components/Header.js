import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <Link to="/"><div className="header-bg"></div></Link>
        </header>
    );
}

export default Header; 