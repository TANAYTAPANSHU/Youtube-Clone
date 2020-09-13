import React , { useState } from 'react';
import "./Header.css"
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import dev from "./Devtube (3).png";
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import { grey, purple } from '@material-ui/core/colors';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Link, Router } from 'react-router-dom';

function Header() {
  const [inputSearch,setsearch ] =useState("");
    return (
      
        <div className="header">
         
         <div className="header__left">
           <MenuSharpIcon />
           <Link to="/">
            <img src={dev} 
            className="header_logo"
             ></img>
             </Link>
             </div>


              <div className="header__input">
           <input type="text" onChange={e => setsearch(e.target.value)} value={inputSearch}  placeholder="Search" />
           
           <Link to={`/search/${inputSearch}`}>
           <SearchIcon className="header__button"></SearchIcon>
          </Link>
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
