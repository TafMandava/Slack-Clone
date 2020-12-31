import React from 'react';
import './SidebarOption.css';

function SidebarOption({ Icon, title }) {
    return (
        <div className="sidebarOption">
            {/* Only render an Icon if an Icon exists */}
            {Icon && <Icon className="sidebarOption__icon" />}
            {/* 
                If you pass in an Icon then render the title
                But if you didn't pass in the Icon, l want it to be a channel
            */}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                 <h3 className="sidebarOption__channel">
                     <span className="sidebarOption__hash">#</span>{title}
                </h3>
            )}
        </div>
    );
}

export default SidebarOption;