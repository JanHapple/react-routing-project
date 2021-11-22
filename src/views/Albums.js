import React from 'react';
import Form from '../components/Form';
import { Link } from 'react-router-dom';
import "../styles.css";

const Albums = props => {
    
    const albumList = props.albums.map((album, i) => {
        return(
            <li key={i}>
                <Link to={`/albums/${album.id}`} className="album-link">{album.title} ({album.year})</Link>
            </li>
        )
    });

    return(
        <div className="list-container">
            <ul>
                {albumList}
            </ul>
            <div className="form-container">
                <Form 
                getAlbumName={props.getAlbumName} 
                getReleaseYear={props.getReleaseYear} 
                getUrl={props.getUrl} 
                buildNewAlbum={props.buildNewAlbum} 
                
                newAlbumName={props.newAlbumName} 
                url={props.url} 
                releaseYear={props.releaseYear}/>
            </div>
            
        </div>
    );
}

export default Albums; 