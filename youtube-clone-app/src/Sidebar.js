import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Sidebar() {
    return (
      <div className="sidebar">
        <SidebarRow title="Home" selected Icon={HomeIcon} />
        <SidebarRow title="Trending" Icon={WhatshotIcon} />
        <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
        <hr />
        <SidebarRow title="Library" Icon={VideoLibraryIcon} />
        <SidebarRow title="History"  Icon={HistoryIcon} />
        <SidebarRow title="Your videos"  Icon={PlayCircleFilledIcon} />
        <SidebarRow title="Watch Later" Icon={ WatchLaterIcon} />
        <SidebarRow title="Liked Videos" Icon={ThumbUpAltIcon} />
        <SidebarRow title="Show More" Icon={ExpandMoreIcon} />
          <hr />
      </div>
    );
}

export default Sidebar
