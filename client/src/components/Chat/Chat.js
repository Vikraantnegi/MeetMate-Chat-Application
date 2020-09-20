import React, {useState, useEffect} from "react";
import qString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const endpoint =  'localhost:5000';
    useEffect(()=>{
        const {name, room} = qString.parse(location.search);
        socket= io(endpoint);
        setName(name);
        setRoom(room);
        
        socket.emit('join', {name, room}, ()=>{

        });

        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }
    }, [endpoint, location.search]);

    useEffect(()=>{
        socket.on('Message', (text) => {
            setMessages([...messages, text]);
        });
    }, [messages]);

    const sendMessage = (event) =>{
        event.preventDefault();
        if(message){
            socket.emit('SendMessage', message, () => {
                setMessage('');
            });
        }
    }

    console.log(message, messages);


    return(
        <div className='chat-container'>
            <div className='chat-inner'>
                <input value={message} 
                onChange={(event)=>setMessage(event.target.value)} 
                onKeyPress={(event)=> event.key==='Enter' ? sendMessage(event) : null} 
                />
            </div>
        </div>
    )
}

export default Chat;