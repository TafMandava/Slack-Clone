import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import db from './firebase';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{ user }] = useStateValue();

    const [channels, setChannels] = useState([]);
    
    /*
        React Hook
        Run this code when the sidebar component loads as well as when the second argument changes
    */
    useEffect(() => {
        /*
            Go to the rooms collection
            On snapshot - go ahead and take a live picture of what the database looks like
            Whenever the database changes it will give us a new snapshot
            If anything is deleted or updated a new snapshot will be generated
            That's why we call it realtime 
        */
        db.collection('rooms').onSnapshot(snapshot => {
            /*
                Go through each of the documents in the snapshot
                And for every single doc that you iterate
                Loop through every single doc and return an object
            */
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id, /* Get Firebase Document's ID - Add document */
                    name: doc.data().name /* Get name from name : 'general' - Start collection (messages) & Add field (name : 'general') */
                }))
            );
        });
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Slack</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user.displayName}
                    </h3>
                </div>
                <CreateIcon /> 
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved Items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Expand More" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" /> 
            {/* 
                Connect to DB and list all the channels
                Again we will be using the Sidebar channel
            */}
            {channels.map(channel => (
                <SidebarOption 
                    key={channel.id} 
                    title={channel.name} 
                    id={channel.id} 
                /> 
            ))}      
        </div>
    );
}

export default Sidebar;