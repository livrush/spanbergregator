import React from 'react';
import moment from 'moment';

const Video = ({ video, click }) => (
  <div onClick={() => click(video.id.videoId)}>
    <div className="d-flex video-list-item">
      <div className="video-thumbnail-wrapper">
        <img
          className="video-thumbnail"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </div>
      <p className="video-details">
        <a
          href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
          target="_blank"
        >
          {video.snippet.title}
        </a>
        <br />
        {video.snippet.channelTitle}
        <br />
        {moment(video.snippet.publishedAt).format('MMM Do, YYYY')}
      </p>
    </div>
  </div>
);

export default Video;
