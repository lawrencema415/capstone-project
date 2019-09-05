import React, {Component} from 'react'
class Result extends Component {

  renderSongs() {
    let songs = this.props.results.map( (song,idx) => {
        return <div id={idx}>{song.name}</div>
    })
    if (this.props.value !== "" && this.props.found == false) {
      return (
        <>
          <h2>No result found for "{this.props.value}"</h2>
          <h3>Please make sure your words are spelled correctly or use less or different keywords.</h3>
        </>
      )
    }
    if (this.props.results.length <= 0) {
      return (
        <>
        <h2>Search Spotify</h2>
        <h3>Find your favorite songs, artists, albums, podcasts and playlists.</h3>
        </>
      )
    }

    return songs;
  }


  render() {
    return(
      <div className="results">
        {this.renderSongs()}
      </div>
    )
  }
}

export default Result;
