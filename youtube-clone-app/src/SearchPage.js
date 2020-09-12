import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import TuneIcon from '@material-ui/icons/Tune';
import channelimg from './Devtube.png';
import VideoRow from './VideoRow.js'

function SearchPage() {
    return (
        <div className="SearchPage">
        <div className = "SearchPage__filter">
          <TuneIcon></TuneIcon>
          <h3>FILTER</h3>
        </div>
        <hr />
    <ChannelRow 
        image={channelimg}
       channel=" Warrior Programmer"
       verified
       subs="660k"
       noOfVideos={382}
       description="You can find awesome coding videos and projects."
  

    />
    <hr />
  <VideoRow />

            
        </div>
    )
}

export default SearchPage;
