import React from "react";
import { Container } from "reactstrap";
import Navbar from "./Navbar";
import ProductLists from "./ProductsList";
export default function Cart(props) {
  // return <p>parteek</p>;
  var content = {
    PageTitle: "Cart !!!",
    ButtonsList: ["BackToProductPage", "LogOut"]
  };
  console.log(props.content, props.cartData, props.setCartFunction);
  return (
    <Container>
      <Navbar content={content} />
      <ProductLists
        content={props.content}
        cartData={props.cartData}
        setCartFunction={props.setCartFunction}
        buttonstatement1={props.buttonstatement1}
        buttonstatement2={props.buttonstatement2}
      />
    </Container>
  );
}
