import React from 'react';
import NotFound from './NotFound';
// import { Link, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Album = props => {

    // const { id } = useParams();
    // const getAlbumView = props.albums.find(album => album.id == id)
    const chosenAlbum = props.selected;


    //* Page not Found-function. If Id doesn't exist ============
    let content;

    if (chosenAlbum) {
        content = 
            <>
                <Link to="/albums" className="album-links backlink">Back</Link>
                <img className="album-pics" src={chosenAlbum.url} /> 
                <p className="album-links album-des">{chosenAlbum.title} ({chosenAlbum.year})</p>  
            </>
    } else {
        content = <NotFound></NotFound>
    }
    //*=========================================================
    
    return(
        <div className="album-div">
            {content}
        </div>    
    );
}

export default Album; 