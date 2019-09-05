import React from 'react';

const Playlists = props => {
  let playlist = props.playlists.map( playlist => <div id={playlist._id}>{playlist.name}</div> )
  return playlist
}

export default Playlists;
