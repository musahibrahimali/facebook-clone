import React from 'react';
import { Avatar } from '@material-ui/core';
import './Story.css';

function Story(props) {
    const { image, profileSrc, title } = props;
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="story">
            <Avatar className="story__avatar" src={profileSrc} />
            <h4>{title}</h4>
        </div>
    );
}

export default Story;
