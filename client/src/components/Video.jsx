import React from 'react';

const Video = ({ video }) => (
  <div className="row bg-light">
    <div className="col-2">
      <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
    </div>
    <div className="col-10">
      <p>{video.snippet.title}</p>
      <p>{video.snippet.channelTitle}</p>
      <p>{video.snippet.description}</p>
      <p>{video.snippet.publishedAt}</p>
    </div>
  </div>
);

export default Video;
