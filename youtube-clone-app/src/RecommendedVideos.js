import React from 'react'
import "./RecommendedVideos.css"
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
function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>RecommendedVideos</h2>
      <div className="RecommendedVideos___videos">
          <VideoCard image={dsc}
          title="How to become a DSC LEAD"
          channel="TanayTapanshu"
          views="412k"
          timestamp="1hr ago"
          channelimage={tanay} />
          <VideoCard image={spells}
          title="Productivity spells"
          channel="Warrior Programmer"
          views="12k"
          timestamp="2hrs ago"
          channelimage={devs} />
            <VideoCard image={MLSA}
          title="How to become a Microsoft learn ambassador"
          channel="TanayTapanshu"
          views="14k"
          timestamp="4hrs ago"
          channelimage={tanay} />
              <VideoCard  image={SDE}
          title="SDE Road Map"
          channel="Warrior Programmer"
          views="22k"
          timestamp="8hrs ago"
          channelimage={devs} />
                  <VideoCard image={Reactor}
          title="What is Microsoft Reactor Program?"
          channel="TanayTapanshu"
          views="400k"
          timestamp="14hrs ago"
          channelimage={tanay} />
                 <VideoCard  image={AI}
          title="Starting Up with the AI gaming."
          channel="Warrior Programmer"
          views="2k"
          timestamp="18hrs ago"
          channelimage={devs} />
                                    <VideoCard image={community}
          title="Why should you join a dev community??"
          channel="TanayTapanshu"
          views="600k"
          timestamp="19hrs ago"
          channelimage={tanay} />
                    <VideoCard  image={Problem}
          title="How to develop problem solving skills?"
          channel="Warrior Programmer"
          views="209k"
          timestamp="21hrs ago"
          channelimage={devs} />
      </div>
        </div>
    )
}

export default RecommendedVideos;
