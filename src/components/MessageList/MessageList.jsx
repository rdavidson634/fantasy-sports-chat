import React, {Component} from 'react';
import './MessageList.css'
import Talk from "talkjs";

const DUMMY_DATA = [
    {
        senderId: 'JaneDoe',
        text: 'Hey there'
    },
    {
        senderId: 'BlaineHoe',
        text: 'Interesting hypothosis'
    },
    {
        senderId: 'SameBow',
        text: 'Hey there, Bob'
    }

]

class MessageList extends Component {
    
    render() {
        return (
            <div className='message-list'>
                {DUMMY_DATA.map((message, index) => {
                    return (
                        <div key={index} className="message">
                            <div>{message.senderId}</div>
                            <div>{message.text}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MessageList