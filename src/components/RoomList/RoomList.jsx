import React from 'react';
import './RoomList.css'

function RoomList(props) {
    return (
            <div className='room-list'>
                    
                        <div>
                            <dl>
                                <li>{props.room.title}</li>
                            </dl>
                        </div>
                    
                
            </div>
        )
    }


export default RoomList