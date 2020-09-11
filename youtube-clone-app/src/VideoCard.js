import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css';

function VideoCard({image,title,channel, views, timestamp ,channelimage}) {
    return (
        <div className="VideoCard">
  <img className="VideoCard__thumbnail" src={image}  />
  <div className="VideoCard__info">
  <Avatar  className="VideoCard__avatar" alt={channel} src={channelimage} ></Avatar>
  <div className="VideoCard__text">
      <h4>{title}</h4>
      <p>{channel}</p>
      <p>{views} . {timestamp}</p>
  </div>
  </div>


        </div>
    )
}

export default VideoCard
