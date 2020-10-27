import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import LeagueList from '../../components/LeagueList/LeagueList'
import MessageList from '../../components/MessageList/MessageList'
import PriorityMessages from '../../components/PriorityMessages/PriorityMessages'
import SendNewMessageForm from '../../components/SendNewMessageForm/SendNewMessageForm'


const ChatPage = (props) => {
    return (
        <div className="chat-page">
        <header className="navbar-brand">
          <NavBar 
            user={props.user}
          />
        </header>
      
        <LeagueList />
        <MessageList />
        <SendNewMessageForm />
        <PriorityMessages />
      </div>
    )
}


export default ChatPage;
