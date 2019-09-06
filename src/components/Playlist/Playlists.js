import React from 'react';

const Playlists = props => {
  let playlist = props.playlists.map( playlist => <div key={playlist._id}> {playlist.name} <button type="button" onClick={()=>props.removePlaylist(playlist._id)}>Delete</button></div> )
  return playlist
}

export default Playlists;
