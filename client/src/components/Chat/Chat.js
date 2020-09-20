import React, {useState, useEffect} from "react";
import qString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const endpoint =  'localhost:5000';
    useEffect(()=>{
        const {name, room} = qString.parse(location.search);
        socket= io(endpoint);
        setName(name);
        setRoom(room);
        
        socket.emit('join', {name, room}, ({})=>{
        });

        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }
    }, [endpoint, location.search]);


    return(
        <div>

        </div>
    )
}

export default Chat;