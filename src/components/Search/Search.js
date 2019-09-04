import React, {Component} from 'react'
class Search extends Component {
  state = {
    filter:[]
  }

  handleChange = (event) => {
    console.log(event.target.value);
    console.log(this.props.songs);
    let filtered = this.props.songs.filter(song => song.name.toLowerCase().includes(event.target.value.toLowerCase()) )
    this.setState({filter:filtered})
  };

  renderSongs() {
    let songs = this.state.filter.map( song => {
        return <div id={song._id}>{song.name}</div>
    })

    return songs;
  }

  render() {
    return(
      <div className="search">
        <input type="text" name="search" onChange={this.handleChange} placeholder="Start typing..."/>
        <section type="songs">
        {this.renderSongs()}
        </section>
      </div>
    )
  }
}

export default Search;
