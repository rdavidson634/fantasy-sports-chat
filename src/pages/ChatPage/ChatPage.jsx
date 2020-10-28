import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import RoomList from '../../components/RoomList/RoomList'
import MessageList from '../../components/MessageList/MessageList'
import PriorityMessages from '../../components/PriorityMessages/PriorityMessages'
import SendNewMessageForm from '../../components/SendNewMessageForm/SendNewMessageForm'


const ChatPage = (props) => {
    return (
        <div className="chat-page">
        <header className="navbar-brand">
          <NavBar 
            user={props.user}
            handleLogout={props.handleLogout}
          />
        </header>
      
        {props.rooms.map(room => 
            <RoomList 
                room={room}
                key={room._id}
            />
        )}

        <MessageList />
        <SendNewMessageForm />
        <PriorityMessages />
      </div>
    )
}


export default ChatPage;
