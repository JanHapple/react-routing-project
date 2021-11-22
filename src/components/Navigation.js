import React from 'react';
import Header from "./Header"
import { Link } from 'react-router-dom';

const Navigation = () => {
     
    
    return(
        <>
        <Header></Header>
        <nav>
            <Link className="nav-link" to="/vocals">Vocals</Link>
            <Link className="nav-link" to="/leadguitar">Leadguitar</Link>
            <Link className="nav-link" to="/guitar">Guitar</Link>
            <Link className="nav-link" to="/bass">Bass</Link>
            <Link className="nav-link" to="/drums">Drums</Link>
            {/* <Link className="nav-link" to="/keyboard">Keyboard</Link> */}
            <Link className="nav-link" to="/albums">Albums</Link>
        </nav>
        </>
    );
}

export default Navigation; 
