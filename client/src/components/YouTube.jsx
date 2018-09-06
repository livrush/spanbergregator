import React from 'react';
import Video from './Video';
import uuid from 'uuid/v1';

const YouTube = ({ videos }) => {
  const generateList = function(videos) {
    console.log(videos);
    return videos.map(video => <Video key={uuid()} video={video} />);
  };

  return (
    <div className="card p-4">
      <div className="youtube-content d-flex">
        <div className="video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${videos[0].id.videoId || videos[0].id.videoId}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <div className="video-list-wrapper">
          <ul className="list-group border-top-0">{generateList(videos)}</ul>
        </div>
      </div>
    </div>
  );
};

export default YouTube;
