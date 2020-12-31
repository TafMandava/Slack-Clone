import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import { AccessAlarm, HelpOutline } from '@material-ui/icons';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
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
                <input placeholder="Search Talib Liban" />
            </div>
            <div className="header__right">
                {/* Help icon */}
                <HelpOutlineIcon />
                {/* Avatar of logged in user */}
                <Avatar 
                    className="header__avatar"
                    src=""
                    alt="Tafadzwa Mandava"
                />
            </div>            
        </div>
    );
}

export default Header;