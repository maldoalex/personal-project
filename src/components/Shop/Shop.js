import React from "react";
import ShopAll from "../ShopAll/ShopAll";

class Shop extends React.Component {
  render() {
    return <ShopAll />;
  }
}

export default Shop;

// import React from "react";
// import ShopAll from "../ShopAll/ShopAll"

// class Shop extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       albums: []
//     };
//   }

//   render() {
//     const { albums } = this.state;
//     return (
//       <div className="shop-page">
//         {albums.map(({ id, ...otherShopProps }) => (
//           <ShopAll key={id} {...otherShopProps} />
//         ))}
//       </div>
//     );
//   }
// }

// export default Shop;
