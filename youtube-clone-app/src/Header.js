import React from 'react';
import "./Header.css"
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import dev from "./Devtube (1).png";
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import { grey, purple } from '@material-ui/core/colors';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
function Header() {
    return (
        <div className="header">
         
         <div className="header__left">
           <MenuSharpIcon color="primary" style={{ fontSize: 35 }}/>
           
            <img src={dev} 
            className="header_logo"
             ></img>
             </div>
              <div className="header__input">
           <input type="text" placeholder="Search">
           </input>
           <SearchIcon className="header__button"></SearchIcon>
           </div>
           <div className="header__icons">
            <VideoCallRoundedIcon fontSize="large" />
            <AppsIcon></AppsIcon>
            <NotificationsIcon/>
              <Avatar alt="Remy Sharp" src=""  />
              </div>
        </div>
    )
}

export default Header
