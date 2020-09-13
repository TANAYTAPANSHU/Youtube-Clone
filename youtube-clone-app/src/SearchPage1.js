import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import TuneIcon from '@material-ui/icons/Tune';
import channelimg from './TanayTapanshu.jpg';
import VideoRow from './VideoRow.js';
import VideoCard from './VideoCard';
import dev from './Tanay tube.jpg'
import dsc from './DSC.png'
import devs from './Devtubes.png';

import spells from './spells.png';
import MLSA from './MLSA.png';
import SDE from './SDE.png';
import Reactor from './reactor.png';
import AI from './Aigame.png';
import community from './community.jpg';
import Problem from './problem.png';


function SearchPage1() {
    return (
        <div className="SearchPage">
       
            <div className="SearchPage__filter">
                <TuneIcon></TuneIcon>
                <h3>FILTER</h3>
            </div>
            <hr />
            <ChannelRow
                image={channelimg}
                channel="TanayTapanshu"
                verified
                subs="1000k"
                noOfVideos={4}
                description="Best videos for frontend-developers, backend-developers, student and professional developers.  "

            />
            <hr />
            <VideoRow title="How to become a DSC LEAD"
                channel="TanayTapanshu"
                views="412k"
                subs='1000k'
                description="Know everything about the developer student club of google."
                timestamp="1hr ago"
                image={dsc}
            />
            <hr />
            <VideoRow  title="How to become a Microsoft learn ambassador"
                channel="TanayTapanshu"
                views="14k"
                subs='1000k'
                description="This Video is about the Microsoft Student programmes."
                timestamp="4hr ago"
                image={MLSA}
            />
            <hr />
            <VideoRow title="What is Microsoft Reactor Program?"
          channel="TanayTapanshu"
                views="400k"
                subs='1000k'
                description="Microsoft Reactor has recently launched in India. Know all the details about it."
                timestamp="14hr ago"
                image={Reactor}
            />
            <hr />
            <VideoRow title="Why should you join a dev community??"
                channel="Warrior Programmer"
                views="600k"
                subs='1000k'
                description="Know why is it important for a developer to join the community."
                timestamp="19hr ago"
                image={community}
            />





        </div>
    )
}

export default SearchPage1;
