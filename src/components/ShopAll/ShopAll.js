import React from "react";
import axios from "axios";
import ShopOne from "../ShopOne/ShopOne";

class ShopAll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=1970s&limit=10&api_key=a524b0809a03f493e68a5abff436a312&format=json"
      )
      .then(response => {
        console.log(response.data.albums.album);
        this.setState({
          albums: response.data.albums.album
          // filteredAlbums: response.data.albums.album
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { albums } = this.state;
    console.log(albums);
    return (
      <div className="shop-page">
        {albums.map(({ artist, name, image }) => (
          <ShopOne artist={artist} name={name} image={image} />
        ))}
      </div>
    );
  }
}

export default ShopAll;

// import React from "react";
// import axios from "axios";

// class ShopAll extends React.Component {
//  constructor(props) {
//   super(props);

//   this.state = {
//    albums: []
//   };
//  }

//  componentDidMount() {
//   axios
//    .get(
//     "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=1970s&limit=10&api_key=a524b0809a03f493e68a5abff436a312&format=json"
//    )
//    .then(response => {
//     console.log(response.data.albums.album);
//     this.setState({
//      albums: response.data.albums.album
//      // filteredAlbums: response.data.albums.album
//     });
//    })
//    .catch(error => {
//     console.log(error);
//    });
//  }

//  render() {
//   const { albums } = this.state;
//   return (
//    <div className="shop-page">
//     {albums.map(album => {
//      return (
//       <div>
//        <img src={album.image[2]["#text"]} alt="album cover" />
//        <p>{album.artist.name}</p>
//        <p>{album.name}</p>
//       </div>
//      );
//     })}
//    </div>
//   );
//  }
// }

// export default ShopAll;

// ***********************************

// import React from "react";

// import CollectionItem from "../collection-item/collection-item.component";

// import "./collection-preview.styles.scss";

// const CollectionPreview = ({ title, items }) => (
//  <div className="collection-preview">
//   <h1 className="title">{title.toUpperCase()}</h1>
//   <div className="preview">
//    {items
//     .filter((item, idx) => idx < 4)
//     .map(({ id, ...otherItemProps }) => (
//      <CollectionItem key={id} {...otherItemProps} />
//     ))}
//   </div>
//  </div>
// );

// export default CollectionPreview;
