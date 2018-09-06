import React from 'react';
import Video from './Video';
import uuid from 'uuid/v1';

const YouTube = ({ videos }) => {
    const generateList = function(videos) {
        console.log(videos);
        return videos.map(video => <Video key={uuid()} video={video}></Video>);
    };

    return (
        <ul className="list-group border-top-0">
            { generateList(videos) }
        </ul>
    );
};

export default YouTube;
