import React, { Component } from "react";
import axios from "axios";
import "./VinylShop.scss";

class VinylShop extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      filteredAlbums: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=1970s&limit=50&api_key=a524b0809a03f493e68a5abff436a312&format=json"
      )
      .then(response => {
        console.log(response.data.albums.album);
        this.setState({
          albums: response.data.albums.album,
          filteredAlbums: response.data.albums.album
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // handleChange = e => {
  //   let filterList = this.state.albums.filter(res => {
  //     return res.artist.name.toLowerCase().search(e.target.value) !== -1;
  //   });
  //   this.setState({ filteredAlbums: filterList });
  // };

  render() {
    let filteredAlbums = this.state.filteredAlbums.map(albumArtist => {
      console.log(this.state.filteredAlbums);
      return (
        <div className="1960s">
          <div>
            <img src={albumArtist.image[2]["#text"]} alt="album cover" />
            <p>{albumArtist.artist.name}</p>
            <p>{albumArtist.name}</p>
          </div>
        </div>
      );
    });

    // return (
    //   <div className="vinyl_shop">
    //     <input onChange={this.handleChange} placeholder="search" />

    //     <div className="carousel-slide">
    //       <div className="card">{filteredAlbums}</div>
    //     </div>
    //     <button>Prev</button>
    //     <button>Next</button>
    //   </div>
    // );
  }
}

export default VinylShop;
