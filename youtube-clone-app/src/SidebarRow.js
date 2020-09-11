import React from 'react'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import { blue } from '@material-ui/core/colors';
function SidebarRow(props) {
    return (
        <div className={`SidebarRow ${props.selected && 'selected'} `}>
       <props.Icon className="SidebarRow__icon"  />
            <h4 className="SidebarRow__title">{props.title}</h4>
        </div>
    )
}

export default SidebarRow
