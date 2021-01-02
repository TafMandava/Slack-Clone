import React from 'react';
import './SidebarOption.css';
import { useHistory } from 'react-router-dom';

function SidebarOption({ Icon, addChannelOption, title, id }) {
    /*
        History is when we have to programmatically change the url
        In Web Developement when we click or go backwe do somthing called modifying the history
        We can actually pull the history using a powerful hook called useHistory
        History is whenever you click on a link or go back or forward a page
        The React Hook useHistory has a track record called history
        When you click on a channel icon useHistory pushes the next page into history
        In this way we force a redirect 

    */
    const history = useHistory();

    const selectChannel = () => {
        /*
            It should now take us to the channel's room
            If we do not have the id push the title
        */        
        if (id) {
            history.push(`/room/${id}`)
        } else {
            history.push(title)
        }
    }

    const addChannel = () => {
        if (id) {

        }
    }    

    return (
        <div className="sidebarOption" onClick={ addChannelOption ? addChannel : selectChannel }>
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