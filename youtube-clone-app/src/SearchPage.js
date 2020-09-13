import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import TuneIcon from '@material-ui/icons/Tune';
import channelimg from './Devtubes.png';
import VideoRow from './VideoRow.js';
import VideoCard from './VideoCard';
import dev from './Tanay tube.jpg'
import dsc from './DSC.png'
import devs from './Devtubes.png';
import tanay from './TanayTapanshu.jpg';
import spells from './spells.png';
import MLSA from './MLSA.png';
import SDE from './SDE.png';
import Reactor from './reactor.png';
import AI from './Aigame.png';
import community from './community.jpg';
import Problem from './problem.png';


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
       subs="100k"
       noOfVideos={5}
       description="You can find awesome coding videos and projects."

    />
    <hr />
  <VideoRow title="Productivity Spells"
          channel="Warrior Programmer"
          views="12k"
          subs='100k'
          description="Know the secret spells to maintain your productivity."
          timestamp="2hr ago"
          image={spells}
            />
            <hr />
            <VideoRow title="SDE Road Map"
          channel="Warrior Programmer"
          views="22k"
          subs='100k'
          description="Roadmap you need to become a succesful Software engineer."
          timestamp="8hr ago"
          image={SDE}
            />
          <hr />
          <VideoRow title="Starting Up with AI gaming"
          channel="Warrior Programmer"
          views="2k"
          subs='100k'
          description="AI gaming is currently the most trending topic among coders. Watch to know about it"
          timestamp="18hr ago"
          image={AI}
            />
              <hr />
          <VideoRow title="How to develop problem solving skills?"
          channel="Warrior Programmer"
          views="209k"
          subs='100k'
          description="A lot of people ask this question to me. Hope this video clear"
          timestamp="21hr ago"
          image={Problem}
            />


            

            
        </div>
    )
}

export default SearchPage;
