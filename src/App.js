import "./styles.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar.js";
import DisplayTitle from "./components/DisplayTitle.js";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductLists from "./components/ProductsList";
import Cart from "./components/Cart.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function App() {
  const [data, setData] = React.useState([]);
  const [cartdata, setCartData] = React.useState([]);
  const [NavbarContent, setNavbarContent] = React.useState({
    PageTitle: "Home!!!",
    ButtonsList: ["Login"]
  });

  const setCartDB = (cartData) => {
    console.log("entered in update cart", cartData);
    fetch("https://qgley.sse.codesandbox.io/setCart", {
      method: "POST",
      body: cartData,
      header: { "Content-type": "application/json" }
    })
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(err));
  };
  // setCartDB({ name: "parteek" });
  useEffect(function () {
    fetch("https://qgley.sse.codesandbox.io/getProducts")
      .then((response) => response.json())
      .then((productData) => {
        setData(productData);
      })
      .catch((err) => console.log(err));
    fetch("https://qgley.sse.codesandbox.io/getCart")
      .then((response) => response.json())
      .then((cartData) => {
        setCartData(cartData);
      })
      .catch((err) => console.log(3, err));
  }, []);

  return (
    <Router>
      <div>
        <hr />
        <Switch>
          <Route exact path="/">
            <div className="App">
              <Navbar content={NavbarContent} />
              <ProductLists
                content={data}
                cartData={cartdata}
                setCartFunction={setCartData}
                buttonstatement1="Add to Cart"
                buttonstatement2="Desc"
              />
            </div>
          </Route>
          <Route path="/Cart">
            <Cart
              content={cartdata}
              cartData={cartdata}
              setCartFunction={setCartData}
              buttonstatement1="Delete"
              buttonstatement2="Desc"
              updateCartDB={setCartDB}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
