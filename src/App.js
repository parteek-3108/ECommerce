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
  useEffect(function () {
    fetch("https://8hydl.sse.codesandbox.io/getProducts")
      .then((response) => response.json())
      .then((productData) => {
        setData(productData);
      })
      .catch((err) => console.log(err));
    fetch("https://8hydl.sse.codesandbox.io/getCart")
      .then((response) => response.json())
      .then((cartData) => {
        setCartData(cartData);
      })
      .catch((err) => console.log(err));
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
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
