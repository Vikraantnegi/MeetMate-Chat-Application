import React, {useState, useEffect} from "react";
import qString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import Header from '../Header/Header';
import Text from '../Text/Text';
import MessagePortion from '../Middle/Middle';
import Online from '../Online/Online';

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const endpoint =  'localhost:5000';
    useEffect(()=>{
        const {name, room} = qString.parse(location.search);
        socket= io(endpoint);
        setName(name);
        setRoom(room);
        
        socket.emit('join', {name, room}, (error) => {
            if(error) {
              alert(error);
            }
        });
    }, [endpoint, location.search]);

    useEffect(()=>{
        socket.on('message', message => {
            setMessages([...messages, message]);
        });
        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, [messages]);

    const sendMessage = (event) =>{
        event.preventDefault();
        if(message){
            socket.emit('sendMessage', message, () => {
                setMessage('');
            });
        }
    }

    return(
        <div className='chat-container'>
            <div className='chat-inner'>
                <Header room ={room}/>
                <MessagePortion messages={messages} name={name} />
                <Text message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <Online users={users} />
        </div>
    )
}

export default Chat;