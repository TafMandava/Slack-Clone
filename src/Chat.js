import React, { useState, useEffect } from 'react';
import './Chat.css';
/*
    Alternative - props.match.params
    Hooks such as useState, useEffect can only be used in Functional Components
*/
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
/* 
    https://usehooks.com/ 
*/
import db from './firebase';

function Chat() {

    const [roomDetails, setRoomDetails] = useState(null);
    /* 
        useParams hook
        used for Pulling the roomId parameter from the url 
    */
    const {roomId } = useParams();

    useEffect(() => {
        /* 
            Only run this code if the roomId exists 
        */
        if (roomId) {
            /* 
                Use the roomId to get the room document
                Go to the rooms collection and go to the doc and use the roomId inside the url to find the room that we are in
            */
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                /*
                    It should return for that document the data. That is the name
                */
                setRoomDetails(
                    snapshot.data()
                );
            });

        }

    }, [roomId]); /* Update the code everytime the roomId changes */

    console.log("Room Details >>> ", roomDetails);

    return (
        <div className="chat">
            {/* Chat header */}
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {roomDetails?.name}</strong>
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