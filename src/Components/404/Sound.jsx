/* eslint-disable no-unused-vars */
import React from 'react';

function SoundCloudPlayer() {
  const divStyle = {
    fontSize: '10px',
    color: '#cccccc',
    lineBreak: 'anywhere',
    wordBreak: 'normal',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
    fontWeight: 100
  };
  const linkStyle = {
    color: '#cccccc',
    textDecoration: 'none'
  };

  return (
    <div>
      <iframe
        width="100%"
        height="120"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/425246451&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div style={divStyle}>
        <a href="https://soundcloud.com/the-cheerleader" title="The Cheerleader" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          The Cheerleader
        </a>
        {' · '}
        <a href="https://soundcloud.com/the-cheerleader/nsync-bye-bye-bye" title="NSync - Bye Bye Bye (Original)" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          NSync - Bye Bye Bye (Original)
        </a>
      </div>
    </div>
  );
}

export default SoundCloudPlayer;
