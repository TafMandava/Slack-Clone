import React from 'react';
import './Chat.css';
/*
    Alternative - props.match.params
    Hooks such as useState, useEffect can only be used in Functional Components
*/
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Chat() {
    /* 
        useParams hook
        used for Pulling the roomId parameter from the url 
    */
    const {roomId } = useParams();

    return (
        <div className="chat">
            {/* Chat header */}
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># general </strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Chat;