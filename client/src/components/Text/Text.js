import React from "react";
import './Text.css';

const Text = ({message, setMessage, sendMessage}) =>{
    return(
        <form className="text-form">
            <input className="text-input"
            type="text" placeholder ="Type your text here..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={(event) => event.key === "Enter" ? sendMessage(event) : null}
            />
            <button className="text-sendButton"
            onClick={(event)=>sendMessage(event)}>Send!</button>
        </form>
    );
}

export default Text;