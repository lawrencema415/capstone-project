import React from 'react';

const MusicDetail = props => {
  return (
    <>
    <img src={props.currentSongImg} alt='current-song-image'/>
    {props.currentSongName}
    </>
  )
}

export default MusicDetail;
