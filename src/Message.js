import React from 'react';
import './Message.css';

function Message({ id, message, timestamp, userImage, user }) {
    return (
        <div className="message">
            <img src={userImage} alt={user} />
            <div className="message__info">
                <h4>{user}</h4>
                <p>{message}</p>  
            </div>          
        </div>
    );
}

export default Message;