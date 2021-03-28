import "./styles.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import DisplayTitle from "./components/DisplayTitle.js";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductLists from "./components/ProductsList";
import Cart from "./components/Cart.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function App() {
  const [data, setData] = React.useState([
    {
      imagePath:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5633243/2018/9/11/9be8df11-f177-4a1c-bc92-c96fd4e4af681536649816375-Mast--Harbour-Men-Maroon-Solid-Tailored-Jacket-1641536649814-4.jpg",
      title: "ImageTitle",
      price: "100",
      Quantity: 100,
      desc:
        "Aside from being a part of every single type of literature, stories are at the foundation of creativity and part of just about everything we do, particularly when it comes to entertainment, recording, and reporting of any form. So, they are shared in all different ways—from oral and written storytelling or journalism; to TV, film, and radio; to fine arts, stage performance and music; and so on."
    },
    {
      imagePath:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5633243/2018/9/11/9be8df11-f177-4a1c-bc92-c96fd4e4af681536649816375-Mast--Harbour-Men-Maroon-Solid-Tailored-Jacket-1641536649814-4.jpg",
      title: "ImageTitle",
      price: "100",
      Quantity: 100,
      desc:
        "Aside from being a part of every single type of literature, stories are at the foundation of creativity and part of just about everything we do, particularly when it comes to entertainment, recording, and reporting of any form. So, they are shared in all different ways—from oral and written storytelling or journalism; to TV, film, and radio; to fine arts, stage performance and music; and so on."
    },
    {
      imagePath:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5633243/2018/9/11/9be8df11-f177-4a1c-bc92-c96fd4e4af681536649816375-Mast--Harbour-Men-Maroon-Solid-Tailored-Jacket-1641536649814-4.jpg",
      title: "ImageTitle",
      price: "100",
      Quantity: 100,
      desc:
        "Aside from being a part of every single type of literature, stories are at the foundation of creativity and part of just about everything we do, particularly when it comes to entertainment, recording, and reporting of any form. So, they are shared in all different ways—from oral and written storytelling or journalism; to TV, film, and radio; to fine arts, stage performance and music; and so on."
    },
    {
      imagePath:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5633243/2018/9/11/9be8df11-f177-4a1c-bc92-c96fd4e4af681536649816375-Mast--Harbour-Men-Maroon-Solid-Tailored-Jacket-1641536649814-4.jpg",
      title: "ImageTitle",
      price: "100",
      Quantity: 100,
      desc:
        "Aside from being a part of every single type of literature, stories are at the foundation of creativity and part of just about everything we do, particularly when it comes to entertainment, recording, and reporting of any form. So, they are shared in all different ways—from oral and written storytelling or journalism; to TV, film, and radio; to fine arts, stage performance and music; and so on."
    },
    {
      imagePath:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5633243/2018/9/11/9be8df11-f177-4a1c-bc92-c96fd4e4af681536649816375-Mast--Harbour-Men-Maroon-Solid-Tailored-Jacket-1641536649814-4.jpg",
      title: "ImageTitle",
      price: "100",
      Quantity: 100,
      desc:
        "Aside from being a part of every single type of literature, stories are at the foundation of creativity and part of just about everything we do, particularly when it comes to entertainment, recording, and reporting of any form. So, they are shared in all different ways—from oral and written storytelling or journalism; to TV, film, and radio; to fine arts, stage performance and music; and so on."
    },
    {
      imagePath:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5633243/2018/9/11/9be8df11-f177-4a1c-bc92-c96fd4e4af681536649816375-Mast--Harbour-Men-Maroon-Solid-Tailored-Jacket-1641536649814-4.jpg",
      title: "ImageTitle",
      price: "100",
      Quantity: 100,
      desc:
        "Aside from being a part of every single type of literature, stories are at the foundation of creativity and part of just about everything we do, particularly when it comes to entertainment, recording, and reporting of any form. So, they are shared in all different ways—from oral and written storytelling or journalism; to TV, film, and radio; to fine arts, stage performance and music; and so on."
    },
    {
      imagePath:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5633243/2018/9/11/9be8df11-f177-4a1c-bc92-c96fd4e4af681536649816375-Mast--Harbour-Men-Maroon-Solid-Tailored-Jacket-1641536649814-4.jpg",
      title: "ImageTitle",
      price: "100",
      Quantity: 100,
      desc:
        "Aside from being a part of every single type of literature, stories are at the foundation of creativity and part of just about everything we do, particularly when it comes to entertainment, recording, and reporting of any form. So, they are shared in all different ways—from oral and written storytelling or journalism; to TV, film, and radio; to fine arts, stage performance and music; and so on."
    },
    {
      imagePath:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5633243/2018/9/11/9be8df11-f177-4a1c-bc92-c96fd4e4af681536649816375-Mast--Harbour-Men-Maroon-Solid-Tailored-Jacket-1641536649814-4.jpg",
      title: "ImageTitle",
      price: "100",
      Quantity: 100,
      desc:
        "Aside from being a part of every single type of literature, stories are at the foundation of creativity and part of just about everything we do, particularly when it comes to entertainment, recording, and reporting of any form. So, they are shared in all different ways—from oral and written storytelling or journalism; to TV, film, and radio; to fine arts, stage performance and music; and so on."
    }
  ]);
  const [NavbarContent, setNavbarContent] = React.useState({
    PageTitle: "Home!!!",
    ButtonsList: ["Login"]
  });
  return (
    <Router>
      <div>
        <hr />
        <Switch>
          <Route exact path="/">
            <div className="App">
              <Navbar content={NavbarContent} />
              <ProductLists content={data} />
            </div>
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
