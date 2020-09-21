import React from "react";
import './Online.css';

import Onlinedot from "../../icons/onlineIcon.png";

const Online = ({users}) =>{
    return(
        <div className="Online-container">
            <div>
                <h1>MeetMate - A Chat Application</h1>
            </div>
            {
            users
                ? (
                <div>
                    <h1>People currently in the room:</h1>
                    <div className="online-active">
                    <h2>
                        {users.map(({name}) => (
                        <div key={name} className="online-name">
                            {name}
                            <img alt="Online Icon" src={Onlinedot}/>
                        </div>
                        ))}
                    </h2>
                    </div>
                </div>
                )
                : null
            }
        </div>
    );
}

export default Online;