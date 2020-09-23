import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './Join.css';
import Illust from "../../icons/undraw_Connecting_Teams_8ntu.svg";

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const handleKeyPress = event => {
        if (event.key === 'Enter') {            
        }
    };
    const handleKeyPress1 = event => {
        if (event.key === 'Enter') {            
        }
    };

    return(
        <div className="join-container">    
            <div className="join-inner">    
                <div className="illust">
                    <img src={Illust} alt="" /> 
                </div>
                <div className="formup">
                    <h1 className="join-header">Join Here!</h1>
                    <div>
                        <input placeholder="What would you like to call yourself?" 
                        className="join-input" type="text" 
                        onChange={(event)=>setName(event.target.value)}
                        onKeyPress={handleKeyPress1} />
                    </div>
                    <div>
                        <input placeholder="Where would you like to talk?" 
                        className="join-input mt-20" type="text" 
                        onChange={(event)=>setRoom(event.target.value)}
                        onKeyPress={handleKeyPress} />
                    </div>
                    <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                        <button className="join-button mt-30" type="submit">Lets Chat!</button>
                    </Link>
                </div>                
            </div>
        </div>
    )
}

export default Join;