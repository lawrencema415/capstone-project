import React from 'react';



const MusicDetail = props => {
  return (
    <>
    <img src={props.currentSongImg}/>
    {props.currentSongName}
    </>
  )
}

export default MusicDetail;
