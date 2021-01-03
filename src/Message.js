import React from 'react';
import './Message.css';

function Message({ id, message, timestamp, useImage, user }) {
    return (
        <div className="message">
            <p>{message}</p>
        </div>
    );
}

export default Message;