import React from 'react'
import "./RecommendedVideos.css"
import VideoCard from './VideoCard';
import dev from './Tanay tube.jpg'
import devs from './Devtube.png'
function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>RecommendedVideos</h2>
      <div className="RecommendedVideos___videos">
          <VideoCard image={dev}
          title="Dev Tube uiusahdduisa uh"
          channel="Tanay Tapanshu"
          views="412"
          timestamp="4th sept"
          channelimage={devs} />
          <VideoCard image={dev}
          title="Dev Tube uiusahdduisa uisahdsahdib huisahisahksauifh"
          channel="Tanay Tapanshu"
          views="412"
          timestamp="4th sept"
          channelimage={devs} />
            <VideoCard/>
              <VideoCard/>
                <VideoCard/>
                  <VideoCard/>
                    <VideoCard/>
                      <VideoCard/>
      </div>
        </div>
    )
}

export default RecommendedVideos;
