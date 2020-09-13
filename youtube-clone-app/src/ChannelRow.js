import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChannelRow.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


function ChannelRow({  image,
       channel,
       verified,
       subs,
       noOfVideos,
       description}) {
    return (
        <div className="ChannelRow">
            <Avatar id="ChannelRow__logo" alt={channel} src={image} />
            <div className="ChannelRow__text">
                <h3>{channel}{verified && <CheckCircleIcon /> } </h3>
               <p>{subs} Subscribers * {noOfVideos} videos </p>
               <p>{description}</p>

            </div>
        </div>
    )
}

export default ChannelRow
