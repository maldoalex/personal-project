import React, { Component } from "react";
import axios from "axios";
import "./HardwareShop.scss";

class HardwareShop extends Component {
  constructor() {
    super();
    this.state = {
      hardware: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/hardware")
      .then(response => {
        console.log(response);
        this.setState({ hardware: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let listHardware = this.state.hardware.map(hardwareItem => {
      return (
        <div className="hardware">
          <div>
            <img src={hardwareItem.product_image} alt="hardware" />
            <p>{hardwareItem.product_name}</p>
          </div>
          {/* {listHardware} */}
        </div>
      );
    });
    return <div>{listHardware}</div>;
  }
}

export default HardwareShop;
