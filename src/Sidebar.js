import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h2>Talib Liban</h2>
                <FiberManualRecordIcon /> 
            </div>
        </div>
    );
}

export default Sidebar;