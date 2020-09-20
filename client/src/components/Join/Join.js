import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './Join.css';

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return(
        <div className="join-container">
            <div className="join-inner">
                <h1 className="header">Join Here!</h1>
                <div><input placeholder="What would you like to call yourself?" className="join-input" type="text" onChange={(event)=>setName(event.target.value)} /></div>
                <div><input placeholder="Where would you like to talk?" className="join-input mt-20" type="text" onChange={(event)=>setRoom(event.target.value)} /></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="join-button mt-30" type="submit">Lets Chat!</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;