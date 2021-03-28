import "./styles.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import DisplayTitle from "./components/DisplayTitle.js";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductLists from "./components/ProductsList";
export default function App() {
  const [data, setData] = React.useState([
    {
      imagePath:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5633243/2018/9/11/9be8df11-f177-4a1c-bc92-c96fd4e4af681536649816375-Mast--Harbour-Men-Maroon-Solid-Tailored-Jacket-1641536649814-4.jpg",
      title: "ImageTitle",
      price: "100",
      Quantity: 100
    },
    {
      imagePath:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5633243/2018/9/11/9be8df11-f177-4a1c-bc92-c96fd4e4af681536649816375-Mast--Harbour-Men-Maroon-Solid-Tailored-Jacket-1641536649814-4.jpg",
      title: "ImageTitle",
      price: "100",
      Quantity: 100
    },
    {
      imagePath:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5633243/2018/9/11/9be8df11-f177-4a1c-bc92-c96fd4e4af681536649816375-Mast--Harbour-Men-Maroon-Solid-Tailored-Jacket-1641536649814-4.jpg",
      title: "ImageTitle",
      price: "100",
      Quantity: 100
    },
    {
      imagePath:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5633243/2018/9/11/9be8df11-f177-4a1c-bc92-c96fd4e4af681536649816375-Mast--Harbour-Men-Maroon-Solid-Tailored-Jacket-1641536649814-4.jpg",
      title: "ImageTitle",
      price: "100",
      Quantity: 100
    },
    {
      imagePath:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5633243/2018/9/11/9be8df11-f177-4a1c-bc92-c96fd4e4af681536649816375-Mast--Harbour-Men-Maroon-Solid-Tailored-Jacket-1641536649814-4.jpg",
      title: "ImageTitle",
      price: "100",
      Quantity: 100
    },
    {
      imagePath:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5633243/2018/9/11/9be8df11-f177-4a1c-bc92-c96fd4e4af681536649816375-Mast--Harbour-Men-Maroon-Solid-Tailored-Jacket-1641536649814-4.jpg",
      title: "ImageTitle",
      price: "100",
      Quantity: 100
    },
    {
      imagePath:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5633243/2018/9/11/9be8df11-f177-4a1c-bc92-c96fd4e4af681536649816375-Mast--Harbour-Men-Maroon-Solid-Tailored-Jacket-1641536649814-4.jpg",
      title: "ImageTitle",
      price: "100",
      Quantity: 100
    },
    {
      imagePath:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5633243/2018/9/11/9be8df11-f177-4a1c-bc92-c96fd4e4af681536649816375-Mast--Harbour-Men-Maroon-Solid-Tailored-Jacket-1641536649814-4.jpg",
      title: "ImageTitle",
      price: "100",
      Quantity: 100
    }
  ]);
  const [NavbarContent, setNavbarContent] = React.useState({
    PageTitle: "Home!!!",
    Buttons: ["Add to Cart", "Login"]
  });
  return (
    <div className="App">
      <Navbar content={NavbarContent} />
      <ProductLists content={data} />
    </div>
  );
}
