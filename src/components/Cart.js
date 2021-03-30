import React, { useEffect } from "react";
import { Container } from "reactstrap";
import Navbar from "./Navbar";
import ProductLists from "./ProductsList";
export default function Cart(props) {
  // console.log(props);

  var content = {
    PageTitle: "Cart !!!",
    ButtonsList: ["BackToProductPage", "LogOut"]
  };
  return (
    <Container>
      <Navbar content={content} />
      <ProductLists
        updateCartDB={props.updateCartDB}
        content={props.content}
        cartData={props.cartData}
        setCartFunction={props.setCartFunction}
        buttonstatement1={props.buttonstatement1}
        buttonstatement2={props.buttonstatement2}
      />
    </Container>
  );
}
