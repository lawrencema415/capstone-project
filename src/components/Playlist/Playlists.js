import React from 'react';

const Playlists = props => {
  let playlist = props.playlists.map( playlist =>
    <div className="playlist-card" key={playlist._id}>
      <div className="img-container">
        <img src={playlist.Songs.length >= 1 ? playlist.Songs[0].picture : 'https://spotify-clone.s3-us-west-1.amazonaws.com/empty_playlist.jpg'} alt='playlist picture' />
          <i className="fa fa-play-circle-o" aria-hidden="true"></i>
      </div>
      {playlist.name} <button type="button" onClick={()=>props.removePlaylist(playlist._id)}>Delete</button>
    </div> )
  return playlist
}

export default Playlists;
