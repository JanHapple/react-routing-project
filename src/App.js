import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Band from "./views/Band";
import Vocals from "./views/Vocals";
import Guitar from "./views/Guitar";
import Drums from "./views/Drums";
import Bass from "./views/Bass";
import Leadguitar from "./views/Leadguitar";
import Albums from "./views/Albums";
import Album from "./views/Album";
import NotFound from "./views/NotFound";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import "../src/styles.css";
import data from "./assets/data";

const App = () => {
    const [albums, setAlbums] = useState(data);
    const [id, setId] = useState(data.length); 
    const [newAlbumName, setnewAlbumName] = useState("");
    const [albumRelease, newAlbumRelease] = useState("");
    const [url, setUrl] = useState("")
    // const [newAlbum, setNewAlbum] = useState({id: "", title:"", year:"", url:""});
    // setAlbums(data);

    const getAlbumName = ({target}) => {
       console.log(target.value)
        setnewAlbumName(target.value)
        console.log(newAlbumName)
    }


    const getReleaseYear = ({target}) => {
        console.log(target.value)
        newAlbumRelease(target.value)
    }

    const getUrl = ({target}) => {
        console.log(target.value)
        setUrl(target.value)
    }


    const buildNewAlbum = event => {
        event.preventDefault()
        if (newAlbumName.trim().length > 0 && albumRelease.trim().length > 0 && url.trim().length > 0) {
        
        let newAlbum = {
            id: id + 1, 
            title: newAlbumName, 
            year: albumRelease, 
            url: url
        }
        //* No need for a hook, it's async
        // setNewAlbum({id: id, title: newAlbumName, year: albumRelease, url: url});
        setAlbums(albums.concat(newAlbum));
        // setNewAlbum({id: "", title:"", year:"", url:""});
        setId(id + 1);
        setnewAlbumName("");
        setUrl("");
        newAlbumRelease("");
        } else {
            alert("Please enter all necessary infos into the input fields!")
        }
    }

    console.log(albums)
    
    return(
        <Router>
            <Navigation />
            <main className="container">
                <Switch>
                    {/* <Route exact path="/" component={Band}/> */}
                    {/* <Route exact path="/">
                        <Band className="transition"/>
                    </Route> */}
                    <Route exact path="/" key="/" render={({match}) => (
                    <CSSTransition
                        in={match != null}
                        timeout={300}
                        classNames="transition"
                        unmountOnExit
                    >
                        <Band className="transition"/>    
                    </CSSTransition>
                    )}/>
                    
                    {/* <Route exact path="/vocals">
                        <Vocals className="transition"/>
                    </Route> */}
                    {/* <Route exact path="/vocals" component={Vocals}/> */}
                    <Route exact path="/vocals" render={() => <Vocals />}/>

                    {/* <Route exact path="/leadguitar">
                        <Leadguitar className="transition"/>
                    </Route> */}
                    {/* <Route exact path="/leadguitar" component={Leadguitar}/> */}
                    <Route exact path="/leadguitar" render={() => <Leadguitar />}/>
                    
                    {/* <Route exact path="/guitar">
                        <Guitar className="transition"/>
                    </Route> */}
                    {/* <Route exact path="/guitar" component={Guitar}/> */}
                    <Route exact path="/guitar" render={() => <Guitar />}/>

                    {/* <Route exact path="/bass" component={Bass}/> */}
                    {/* <Route exact path="/bass">
                        <Bass className="transition"/>
                    </Route> */}
                    <Route exact path="/bass" render={() => <Bass />}/>

                    {/* <Route exact path="/drums" component={Drums}/> */}
                    {/* <Route exact path="/drums">
                        <Drums className="transition"/>
                    </Route> */}
                    <Route exact path="/drums" render={() => <Drums />}/>

                    {/* <Route exact path="/keyboard" component={Keyboard}/> */}
                    {/* <Route exact path="/keyboard">
                        <Keyboard className="transition"/>
                    </Route> */}

                    {/* <Route exact path="/albums" >
                        <Albums className="transition" albums={albums}/>
                    </Route> */}
                    <Route exact path="/albums" render={() => {
                    return (
                        <Albums 
                            albums={albums} 
                            getAlbumName={getAlbumName} 
                            getReleaseYear={getReleaseYear} 
                            getUrl={getUrl} 
                            buildNewAlbum={buildNewAlbum} 
                            newAlbumName={newAlbumName} 
                            releaseYear={albumRelease} 
                            url={url}    
                        />    
                    );
                    }
                    }
                    />

                    {/* <Route exact path="/albums/:id" >
                        <Album className="transition" albums={albums}/>
                    </Route> */}
                    {/* <Route exact path="/albums/:id" render={() => <Album albums={albums}/>}/> */}

                    <Route exact path="/albums/:id" render={({match}) => {
                        const getAlbulmView = albums.find(album => album.id == match.params.id);
                     
                        return <Album selected={getAlbulmView}/>  
                    } 
                    }/>


                    {/* <Route exact path="*" component={NotFound}/> */}
                    {/* <Route path="*" >
                        <NotFound />
                    </Route> */}
                    <Route exact path="*" render={() => <NotFound />}/>
                    
                </Switch>
            </main>
        </Router>
    )
}

export default App; 