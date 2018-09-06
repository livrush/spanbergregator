import React, { Component } from 'react';
import Video from './Video';
import uuid from 'uuid/v1';

class YouTube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
    };
    this.handleVideoListClick = this.handleVideoListClick.bind(this);
  }

  handleVideoListClick(selectedId) {
    this.setState({ selectedId });
  }

  render() {
    const { videos } = this.props;
    const { handleVideoListClick } = this;

    const generateList = function(videos) {
      return videos.map(video => <Video key={uuid()} video={video} click={handleVideoListClick} />);
    };

    return (
      <div className="card p-4">
        <div className="youtube-content d-flex">
          <div className="video-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${this.state.selectedId || videos[0].id.videoId}`}
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
}

export default YouTube;
