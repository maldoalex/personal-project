import React, { Component } from "react";
import axios from "axios";
import "./VinylShop.scss";

class VinylShop extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      updatedAlbums: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=1970s&limit=100&api_key=a524b0809a03f493e68a5abff436a312&format=json"
      )
      .then(response => {
        console.log(response.data.albums.album);
        this.setState({ albums: response.data.albums.album });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClick = e => {
    let genre = e.target.name;
    axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=a524b0809a03f493e68a5abff436a312&format=json`
      )
      .then(response => {
        console.log(this.state);
        this.setState({ albums: response.data.albums.album });
      });
  };

  // handleChange = e => {
  //   this.setState({
  //     updatedAlbums: this.state.albums
  //   });
  //   let filterList = this.state.updatedAlbums.filter(res => {
  //     return res.name.toLowerCase().search(e.target.value) !== -1;
  //   });

  //   this.setState({ updatedAlbums: filterList });
  // };

  render() {
    let albumArtists = this.state.albums.map(albumArtist => {
      console.log(this.state.albumArtist);
      return (
        <div className="1960s">
          <div>
            <img src={albumArtist.image[2]["#text"]} alt="album cover" />
            <p>{albumArtist.name}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="vinyl_shop">
        <input onChange={this.handleChange} placeholder="search" />
        <button name="rap" onClick={this.handleClick}>
          Rap
        </button>
        <button name="rock" onClick={this.handleClick}>
          Rock
        </button>
        <div>{albumArtists}</div>
      </div>
    );
  }
}

export default VinylShop;
