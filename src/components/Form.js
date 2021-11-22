import React from 'react';
import "../styles.css";

const Form = props => {
    return(
    <form className="form">
        <input className="album-name txt-field" placeholder="Please enter album name" onChange={props.getAlbumName} value={props.newAlbumName}></input>
        <input className="album-year txt-field" placeholder="Please enter release year" onChange={props.getReleaseYear} value={props.releaseYear}></input>
        <input className="cover-url txt-field" placeholder="Enter URL to album cover" onChange={props.getUrl} value={props.url}></input>
        <div className="submit-btn txt-field">
        <button className="new-album-btn" type="submit" onClick={props.buildNewAlbum}>Add an album</button>
        </div>
    </form>
    );
}

export default Form;