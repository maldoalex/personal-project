import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import VinylShop from "./components/VinylShop/VinylShop";
import HardwareShop from "./components/HardwareShop/HardwareShop";
import RegisterLogin from "./components/RegisterLogin/RegisterLogin";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";

export default (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/vinyl_shop" component={VinylShop} />
    <Route path="/hardware_shop" component={HardwareShop} />
    <Route path="/register_login" component={RegisterLogin} />
    <Route path="/about" component={About} />
    <Route path="/cart" component={Cart} />
  </Switch>
);
