import React from 'react';

let lengthHandler = name => {
  if(name.length > 14) {
    return name.substring(0,13) + "..."
  } else {
    return name;
  }
}

let renderDetail = props => {
  if(props.song) {
    return (
      <>
      {props.song.picture && <img src={props.song.picture} alt='current-song-image'/>}
      <div className="details">
        {props.song.name && <h3>{lengthHandler(props.song.name)}</h3>}
        {props.song.artist && <h5>{props.song.artist}</h5>}
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
