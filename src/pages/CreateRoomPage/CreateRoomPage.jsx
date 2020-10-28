import React from 'react';
import CreateRoomForm from '../../components/CreateRoomForm/CreateRoomForm'

const CreateRoomPage = (props) => {
    return (
        <div>
            <CreateRoomForm 
                handleCreateRoom={props.handleCreateRoom}
            />
        </div>
    )
}

export default CreateRoomPage;