import React from 'react';

let renderDetail = props => {
  if(props.currentSongImg.length > 1) {
    return (
      <>
      <img src={props.currentSongImg} alt='current-song-image'/>
      <div className="details">
        <h3>{props.currentSongName}</h3>
        <h5>Artist name</h5>
      </div>
      </>
    )
  } else {
    return (
      <>
      </>
    )
  }
}

const MusicDetail = props => {
  return (
    <>
      {renderDetail(props)}
    </>
  )
}

export default MusicDetail;
