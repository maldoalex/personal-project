import React from "react";

const ShopOne = ({ artist, name, image }) => (
  <div className="shop-one">
    <div
      className="image"
      style={{
        width: 200,
        height: 200,
        backgroundImage: `url(${image[2]["#text"]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="artist">{artist.name}</span>
    </div>
  </div>
);

export default ShopOne;

{
  /* <div>
 <img src={album.image[2]["#text"]} alt="album cover" />
 <p>{album.artist.name}</p>
 <p>{album.name}</p>
</div> */
}

// import React from "react";

// import "./collection-item.styles.scss";

// const CollectionItem = ({ id, name, price, imageUrl }) => (
//  <div className="collection-item">
//   <div
//    className="image"
//    style={{
//     backgroundImage: `url(${imageUrl})`
//    }}
//   />
//   <div className="collection-footer">
//    <span className="name">{name}</span>
//    <span className="price">{price}</span>
//   </div>
//  </div>
// );

// export default CollectionItem;
