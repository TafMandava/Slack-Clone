import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import { AccessAlarm, HelpOutline } from '@material-ui/icons';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider';
import Tooltip from '@material-ui/core/Tooltip';

function Header() {
    
    const [{ user }] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                {/* Time icon*/}
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                {/* Search icon */}
                <SearchIcon />
                {/* Input */}
                <input placeholder="Search Slack" />
            </div>
            <div className="header__right">
                {/* Help icon */}
                <HelpOutlineIcon />
                {/* Avatar of logged in user */}
                <Tooltip title={user?.displayName}>
                    <Avatar 
                        className="header__avatar"
                        src={user?.photoURL}
                        alt={user?.displayName}
                    />
                </Tooltip>
            </div>            
        </div>
    );
}

export default Header;